import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type  PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 25},
        {id: 3, message: 'Blablabla', likesCount: 15},
        {id: 4, message: 'Valera is the best', likesCount: 9}
    ],
    newPostText: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText}
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postText: text
    } as const
}

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>





