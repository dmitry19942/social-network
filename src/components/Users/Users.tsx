import React, {useEffect} from "react";
import {FilterType, requestUsersThunkCreator, followThunkCreator, unFollowThunkCreator} from "../../redux/users-reducer";
import {User} from "./User";
import {Paginator} from "../common/Paginator/Paginator";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";

// component
export const Users = () => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsersThunkCreator(currentPage, pageSize, filter))
    }, [])

    const onCurrentPageChanged = (currentPage: number) => {
        dispatch(requestUsersThunkCreator(currentPage, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsersThunkCreator(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(followThunkCreator(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unFollowThunkCreator(userId))
    }
    return <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onCurrentPageChanged={onCurrentPageChanged} />
        </div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingInProgress={followingInProgress}
                                     followThunkCreator={follow}
                                     unFollowThunkCreator={unfollow}/>
                )
            }
    </div>
}

