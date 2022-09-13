import {ChatMessageType} from "../pages/Chat/ChatPage";
import {AppDispatch, AppThunk} from "./redux-store";
import {chatAPI} from "../api/chat-api";
import {Dispatch} from "redux";

// types
export type ChatActionTypes = ReturnType<typeof messagesReceived>
export type initialStateType = typeof initialState

// state
let initialState = {
    messages: [] as ChatMessageType[]
}

export const chatReducer = (state = initialState, action: ChatActionTypes): initialStateType => {
    switch (action.type) {
        case 'CHAT/MESSAGES_RECEIVED':
            return {...state, messages: [...state.messages, ...action.payload]}
        default:
            return state
    }
}

// actions
export const messagesReceived = (messages: ChatMessageType[]) => ({type: 'CHAT/MESSAGES_RECEIVED', payload: messages} as const)

// thunks
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListeningThunkCreator = (): AppThunk => async (dispatch: AppDispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
    }

export const stopMessagesListeningThunkCreator = (): AppThunk => async (dispatch: AppDispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessageThunkCreator = (message: string): AppThunk => async (dispatch: AppDispatch) => {
    chatAPI.sendMessage(message)
}