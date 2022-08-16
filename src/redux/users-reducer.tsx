import {AnyAction} from "redux";
import {userAPI} from "../api/api";
import {store} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const FOLLOW = 'SN/USERS/FOLLOW'
const UNFOLLOW = 'SN/USERS/UNFOLLOW'
const SET_USERS = 'SN/USERS/SET_USERS'
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SN/USERS/SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS'

export type  UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
}

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    portionSize : number
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

export type ActionTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
}

export const onCurrentPageChangedThunkCreator = (currentPage: number, pageSize: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
}

const followUnfollowFlow = async (dispatch: AppDispatch, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionTypes) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const followThunkCreator = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
    await followUnfollowFlow(dispatch, userId, userAPI.postFollow.bind(userAPI), follow)
}

export const unFollowThunkCreator = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
    await followUnfollowFlow(dispatch, userId, userAPI.deleteFollow.bind(userAPI), unfollow)
}


