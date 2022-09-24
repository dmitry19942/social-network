import {AppDispatch, AppThunk} from "./redux-store";
import {chatAPI} from "../api/chat-api";
import {Dispatch} from "redux";
import { v1 } from "uuid";

// types
export type ChatActionTypes = ReturnType<typeof messagesReceived> | ReturnType<typeof statusChanged> | ReturnType<typeof messagesDeleted>
export type initialStateType = typeof initialState
export type StatusType = 'pending' | 'ready' | 'error'
export type ChatMessageAPIType = {
    message: string
    photo: string
    userId: number
    userName: string
}
type ChatMessageType = ChatMessageAPIType & {id: string}

// state
let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

export const chatReducer = (state = initialState, action: ChatActionTypes): initialStateType => {
    switch (action.type) {
        case 'CHAT/MESSAGES_RECEIVED':
            return {...state, messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))].filter((m, index, array) => index >= array.length - 100)}
        case 'CHAT/STATUS_CHANGED':
            return {...state, status: action.payload.status}
        case 'CHAT/MESSAGES_DELETED':
            return {...state, messages: []}
        default:
            return state
    }
}

// actions
export const messagesReceived = (messages: ChatMessageAPIType[]) => ({type: 'CHAT/MESSAGES_RECEIVED', payload: {messages}} as const)
export const statusChanged = (status: StatusType) => ({type: 'CHAT/STATUS_CHANGED', payload: {status}} as const)
export const messagesDeleted = () => ({type: 'CHAT/MESSAGES_DELETED'} as const)

// thunks
let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListeningThunkCreator = (): AppThunk => async (dispatch: AppDispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
    }

export const stopMessagesListeningThunkCreator = (): AppThunk => async (dispatch: AppDispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    dispatch(messagesDeleted())
    chatAPI.stop()
}
export const sendMessageThunkCreator = (message: string): AppThunk => async (dispatch: AppDispatch) => {
    chatAPI.sendMessage(message)
}