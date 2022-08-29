import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    FilterType,
    followThunkCreator, requestUsersThunkCreator,
    unFollowThunkCreator,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from "../../redux/users-selectors";

// types
type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    filter: FilterType
}
type UsersAPIComponentPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    filter: FilterType
    requestUsersThunkCreator: (currentPage: number, pageSize: number, term: string) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

// component
class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, AppRootStateType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsersThunkCreator(currentPage, pageSize, '')
    }

    onCurrentPageChanged = (currentPage: number) => {
        const {pageSize, filter} = this.props
        this.props.requestUsersThunkCreator(currentPage, pageSize, filter.term)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.requestUsersThunkCreator(1, pageSize, filter.term)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   onCurrentPageChanged={this.onCurrentPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unFollowThunkCreator={this.props.unFollowThunkCreator}
                   onFilterChanged={this.onFilterChanged}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        requestUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator
    })
)(UsersAPIComponent)

