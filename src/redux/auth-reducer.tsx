import {AnyAction} from "redux";
import {authAPI} from "../api/api";
import {store} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

let initialState: InitialStateType = {
    id: null,
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

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}})


type ActionTypes = ReturnType<typeof setAuthUserData>

export const getLoginThunkCreator = (): AppThunk => {
    return (dispatch: AppDispatch) => {
        authAPI.getLogin()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch: AppDispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(getLoginThunkCreator())
                }
            })
    }
}

export const logoutThunkCreator = (): AppThunk => {
    return (dispatch: AppDispatch) => {
        authAPI.logout()
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}