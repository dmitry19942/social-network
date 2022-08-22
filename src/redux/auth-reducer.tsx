import {AnyAction} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {store} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'


export type InitialStateType = {
    id: string
    email: string | null
    login: string | null
    isAuth: boolean,
    captchaUrl: string | null
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

let initialState: InitialStateType = {
    id: '',
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserData = (id: string, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)
export const getCaptchaUrl = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const)


type ActionTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrl>

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
        dispatch(setAuthUserData('', null, null, false))
    }
}