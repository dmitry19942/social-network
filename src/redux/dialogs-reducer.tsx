// types
export type DialogsItemType = {
    name: string
    id: number
    img: string
}
export type MessagesType = {
    id: number
    messages: string
}
export type InitialDialogsStateType = {
    dialogs: DialogsItemType[],
    messages: MessagesType[]
}
export type DialogsActionTypes = ReturnType<typeof sendMessage>

// state
let initialState: InitialDialogsStateType = {
    dialogs: [
        {id: 1, name: 'Dimych', img: "https://i.pinimg.com/236x/6c/a9/eb/6ca9eb3a85019663b9cb685695e5d549.jpg"},
        {id: 2, name: 'Andrey', img: "https://avatoon.net/wp-content/uploads/2022/07/Cartoon-Avatar-White-Background-300x300.png"},
        {id: 3, name: 'Sveta', img: "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"},
        {id: 4, name: 'Sasha', img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"},
        {id: 5, name: 'Viktor', img: "https://i.pinimg.com/550x/f5/69/67/f56967d3bb848e5c48d96b90d0d4cd88.jpg"},
        {id: 6, name: 'Valera', img: "https://img.freepik.com/premium-vector/elegant-man-business-suit-with-badge-man-business-avatar-profile-picture-vector-illustration-isolated_625536-1376.jpg?w=2000"}
    ],
    messages: [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'How is your it-kamasutra?'},
        {id: 3, messages: 'How are you?'},
        {id: 4, messages: 'Yo'},
        {id: 5, messages: 'Hello'}
    ]
}

export const dialogsReducer = (state: InitialDialogsStateType = initialState, action: DialogsActionTypes) : InitialDialogsStateType => {
    switch (action.type) {
        case 'DIALOGS/SEND_MESSAGE':
            let newMessage: MessagesType = {
                id: new Date().getTime(),
                messages: action.newMessageBody
            }
            let newDialog: DialogsItemType = {
                id: 6,
                name: 'Valera',
                img: 'https://img.freepik.com/premium-vector/elegant-man-business-suit-with-badge-man-business-avatar-profile-picture-vector-illustration-isolated_625536-1376.jpg?w=2000'
            }
            return {...state, dialogs: [...state.dialogs, newDialog], messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

// actions
export const sendMessage = (newMessageBody: string) => {
    return {
        type: 'DIALOGS/SEND_MESSAGE', newMessageBody
    } as const
}








