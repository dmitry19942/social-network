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
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


type UsersAPIComponentPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onCurrentPageChangedThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, AppRootStateType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onCurrentPageChanged = (currentPage: number) => {
        this.props.onCurrentPageChangedThunkCreator(currentPage, this.props.pageSize)
    }

    render() {

        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   onCurrentPageChanged={this.onCurrentPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unFollowThunkCreator={this.props.unFollowThunkCreator}
            />
        </>
    }
}

// const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUsersThunkCreator, onCurrentPageChangedThunkCreator, followThunkCreator, unFollowThunkCreator})
)(UsersAPIComponent)

