import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";


type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

// type MapDispatchToPropsType = {
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: UserType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setUsersTotalCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }

type UsersAPIComponentPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, AppRootStateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    onCurrentPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        userAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   onCurrentPageChanged={this.onCurrentPageChanged}/>
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersTotalCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersAPIComponent)