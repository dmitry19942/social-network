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
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";

type QueryParamsType = { term?: string, page?: string, friend?: string };

// component
export const Users = () => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {

        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break
        }

        dispatch(requestUsersThunkCreator(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (!!filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)
        
        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

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

