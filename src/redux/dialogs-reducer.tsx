import {ActionTypes} from "./profile-reducer";


export type DialogsItemType = {
    name: string
    id: number
}

export type MessagesType = {
    id: number
    messages: string
}

export type InitialDialogsStateType = {
    dialogs: DialogsItemType[],
    messages: MessagesType[]
}

export const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState: InitialDialogsStateType = {
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
    ]
}


export const dialogsReducer = (state: InitialDialogsStateType = initialState, action: ActionTypes) : InitialDialogsStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage: MessagesType = {
                id: new Date().getTime(),
                messages: action.newMessageBody
            }
            return {...state,messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export const sendMessage = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    } as const
}








