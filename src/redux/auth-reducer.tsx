const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})


export type ActionTypes = ReturnType<typeof setAuthUserData>