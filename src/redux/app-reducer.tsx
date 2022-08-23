import {getLoginThunkCreator} from "./auth-reducer";
import {AppDispatch, AppThunk} from "./redux-store";

// types
export type InitialStateType = {
    initialized: boolean
}
export type ActionTypes = ReturnType<typeof initializedSuccess>

// state
let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED_SUCCESS':
            return {...state, initialized: true}
        default:
            return state
    }
}

// actions
export const initializedSuccess = () => ({type: 'APP/INITIALIZED_SUCCESS'} as const)

// thunks
export const initializeApp = (): AppThunk => (dispatch: AppDispatch) => {
        let promise = dispatch(getLoginThunkCreator())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }


