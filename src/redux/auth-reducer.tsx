import {AnyAction} from "redux";
import {authAPI} from "../api/api";
import {store} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


export type InitialStateType = {
    id: string
    email: string | null
    login: string | null
    isAuth: boolean
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

let initialState: InitialStateType = {
    id: '',
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserData = (id: string, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)


type ActionTypes = ReturnType<typeof setAuthUserData>

export const getLoginThunkCreator = () => (dispatch: AppDispatch) => {
    return authAPI.getLogin()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                const action = setAuthUserData(id, email, login, true)
                dispatch(action)
            }
        })
}


export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch: AppDispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getLoginThunkCreator())
                } else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logoutThunkCreator = (): AppThunk => {
    return (dispatch: AppDispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData('', null, null, false))
                }
            })
    }
}