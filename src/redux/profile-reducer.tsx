import {sendMessage} from "./dialogs-reducer";
import {PhotosType, Profile_PropsType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {AnyAction} from "redux";
import {profileAPI} from "../api/api";
import {store} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


export type  PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfileStateType = {
    posts: PostsType[]
    profile: Profile_PropsType | null
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
    profile: null as Profile_PropsType | null,
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
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as Profile_PropsType}
        default:
            return state
    }
}

export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: Profile_PropsType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)



export type ActionTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

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

export const savePhotoThunkCreator = (file: File): AppThunk => async (dispatch: AppDispatch) => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

export const saveProfileThunkCreator = (profile: Profile_PropsType): AppThunk => async (dispatch: AppDispatch, getState) => {
    let userId = getState().auth.id
    let res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        if (userId !== null) {
            dispatch(setUserProfileThunkCreator(userId))
        } else {
            throw new Error(`userId can't be null `)
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}))
        return Promise.reject(res.data.messages[0])
    }
}