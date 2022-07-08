import {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";

export type DialogsItemType = {
    name: string
    id: number
}

export type MessagesType = {
    id: number
    messages: string
}

export type InitialStateType = {
    dialogs: DialogsItemType[],
    messages: MessagesType[],
    newMessageBody: string
}

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState: InitialStateType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'How is your it-kamasutra?'},
        {id: 3, messages: 'Yo'},
        {id: 4, messages: 'Yo'},
        {id: 5, messages: 'Yo'}
    ],
    newMessageBody: ''
}


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes) : InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage: MessagesType = {
                id: new Date().getTime(),
                messages: state.newMessageBody
            }
            return {...state,messages: [...state.messages, newMessage], newMessageBody: ''}
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.messageBody}
        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        messageBody: body
    } as const
}

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>



