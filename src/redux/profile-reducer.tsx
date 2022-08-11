import {sendMessage} from "./dialogs-reducer";
import {Profile_PropsType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {AnyAction} from "redux";
import {profileAPI} from "../api/api";
import {store} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

export type  PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfileStateType = {
    posts: PostsType[]
    profile: Profile_PropsType
    status: string
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

let initialState: InitialProfileStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 25},
        {id: 3, message: 'Blablabla', likesCount: 15},
        {id: 4, message: 'Valera is the best', likesCount: 9}
    ],
    profile: {
        aboutMe: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: 'dmitriy199427',
        userId: 19481,
        photos: {small: '', large: ''}
    },
    status: ''
}

export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionTypes): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}

export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: Profile_PropsType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)


export type ActionTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

export const setUserProfileThunkCreator = (userId: string): AppThunk => async (dispatch: AppDispatch) => {
    let res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const getStatusThunkCreator = (userId: string): AppThunk => async (dispatch: AppDispatch) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
}

export const updateStatusThunkCreator = (status: string): AppThunk => async (dispatch: AppDispatch) => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}