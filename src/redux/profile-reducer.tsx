import {PhotosType, Profile_PropsType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {profileAPI} from "../api/api";
import {AppDispatch, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

// types
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
export type ProfileActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

// state
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

export const profileReducer = (state: InitialProfileStateType = initialState, action: ProfileActionTypes): InitialProfileStateType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        case 'PROFILE/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'PROFILE/SET-STATUS':
            return {...state, status: action.status}
        case 'PROFILE/DELETE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case 'PROFILE/SAVE-PHOTO-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos} as Profile_PropsType}
        default:
            return state
    }
}

// actions
export const addPost = (newPostText: string) => ({type: 'PROFILE/ADD-POST', newPostText} as const)
export const setUserProfile = (profile: Profile_PropsType) => ({type: 'PROFILE/SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'PROFILE/SET-STATUS', status} as const)
export const deletePost = (postId: number) => ({type: 'PROFILE/DELETE-POST', postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'PROFILE/SAVE-PHOTO-SUCCESS', photos} as const)

// thunks
export const setUserProfileThunkCreator = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
    let res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}
export const getStatusThunkCreator = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
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
            throw new Error(`userId can't be null`)
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}))
        return Promise.reject(res.data.messages[0])
    }
}