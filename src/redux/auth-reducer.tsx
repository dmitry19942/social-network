import {stopSubmit} from "redux-form";
import {AppDispatch, AppThunk} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

// types
export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    captchaUrl: string | null
}
export type AuthActionTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrl>

// state
let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionTypes): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_AUTH_USER_DATA':
        case 'AUTH/GET_CAPTCHA_URL_SUCCESS':
            return {...state, ...action.payload}
        default:
            return state
    }
}

// actions
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: 'AUTH/SET_AUTH_USER_DATA', payload: {id, email, login, isAuth}} as const)
export const getCaptchaUrl = (captchaUrl: string) => ({type: 'AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)

// thunks
export const getLoginThunkCreator = (): AppThunk => async (dispatch: AppDispatch) => {
    let res = await authAPI.getLogin()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        const action = setAuthUserData(id, email, login, true)
        dispatch(action)
    }
}
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch: AppDispatch) => {
    let res = await authAPI.login(email, password, rememberMe, captcha)
    debugger
    if (res.data.resultCode === 0) {
        dispatch(getLoginThunkCreator())
    } else {
        if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator())
    }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const getCaptchaUrlThunkCreator = (): AppThunk => async (dispatch: AppDispatch) => {
    let res = await securityAPI.getCaptchaUrl()
    let captchaUrl = res.data.url
    dispatch(getCaptchaUrl(captchaUrl))
}
export const logoutThunkCreator = (): AppThunk => async (dispatch: AppDispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}