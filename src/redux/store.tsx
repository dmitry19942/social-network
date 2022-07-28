import {ActionTypes, InitialProfileStateType, profileReducer} from "./profile-reducer";
import {dialogsReducer, InitialDialogsStateType} from "./dialogs-reducer";



export type RootStateType = {
    profilePage: InitialProfileStateType
    dialogsPage: InitialDialogsStateType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: "It's my first post", likesCount: 25},
                {id: 3, message: 'Blablabla', likesCount: 15},
                {id: 4, message: 'Valera is the best', likesCount: 9}
            ],
            newPostText: '',
            profile: {aboutMe: null, lookingForAJob: false, lookingForAJobDescription: null, fullName: 'dmitriy199427', userId: 19481, photos: {small: '', large: ''}},
            status: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber(state: RootStateType) {
        console.log('state changed')
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}











