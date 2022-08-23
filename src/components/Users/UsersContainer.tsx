import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followThunkCreator, getUsersThunkCreator, onCurrentPageChangedThunkCreator,
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
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

// types
type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    portionSize: number
}
type UsersAPIComponentPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    portionSize: number
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onCurrentPageChangedThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

// component
class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, AppRootStateType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersThunkCreator(currentPage, pageSize)
    }

    onCurrentPageChanged = (currentPage: number) => {
        const {pageSize} = this.props
        this.props.onCurrentPageChangedThunkCreator(currentPage, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   portionSize={this.props.portionSize}
                   totalUsersCount={this.props.totalUsersCount}
                   onCurrentPageChanged={this.onCurrentPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unFollowThunkCreator={this.props.unFollowThunkCreator}
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
        portionSize: getPortionSize(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersThunkCreator,
        onCurrentPageChangedThunkCreator,
        followThunkCreator,
        unFollowThunkCreator
    })
)(UsersAPIComponent)

