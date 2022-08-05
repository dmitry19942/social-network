import {AnyAction} from "redux";
import {store} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {getLoginThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type InitialStateType = {
    initialized: boolean
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

type ActionTypes = ReturnType<typeof initializedSuccess>

export const initializeApp = (): AppThunk => (dispatch: AppDispatch) => {
        let promise = dispatch(getLoginThunkCreator())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }


