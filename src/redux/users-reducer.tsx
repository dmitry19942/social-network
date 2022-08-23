import {userAPI} from "../api/api";
import {PhotosType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {AppDispatch, AppThunk} from "./redux-store";

// types
export type  UserType = {
    id: number
    photos: PhotosType
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
export type UsersActionTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

// state
let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionTypes): InitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'USERS/UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'USERS/SET_USERS':
            return {...state, users: action.users}
        case 'USERS/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'USERS/SET_USERS_TOTAL_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'USERS/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

// actions
export const follow = (userId: number) => ({type: 'USERS/FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'USERS/UNFOLLOW', userId} as const)
export const setUsers = (users: UserType[]) => ({type: 'USERS/SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'USERS/SET_CURRENT_PAGE', currentPage} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: 'USERS/SET_USERS_TOTAL_COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'USERS/TOGGLE_IS_FETCHING', isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)

// thunks
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
const followUnfollowFlow = async (dispatch: AppDispatch, userId: number, apiMethod: any, actionCreator: (userId: number) => UsersActionTypes) => {
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


