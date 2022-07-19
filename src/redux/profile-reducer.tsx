import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {Profile_PropsType} from "../components/Profile/ProfileInfo/ProfileInfo";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type  PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfileStateType = {
    posts: PostsType[]
    newPostText: string
    profile: Profile_PropsType
}

let initialState: InitialProfileStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 25},
        {id: 3, message: 'Blablabla', likesCount: 15},
        {id: 4, message: 'Valera is the best', likesCount: 9}
    ],
    newPostText: '',
    profile: {aboutMe: null, lookingForAJob: false, lookingForAJobDescription: null, fullName: 'dmitriy199427', userId: 19481, photos: {small: '', large: ''}}
}

export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionTypes): InitialProfileStateType => {
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, postText: text} as const)
export const setUserProfileAC = (profile: Profile_PropsType) => ({type: SET_USER_PROFILE, profile} as const)



export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof setUserProfileAC> | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>





