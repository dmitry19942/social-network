import React from "react";
import {UserType} from "../../redux/users-reducer";
import {User} from "./User";
import {Paginator} from "../common/Paginator/Paginator";


export type UsersPropsType = {
    users: UserType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onCurrentPageChanged: (currentPage: number) => void
    followingInProgress: number[]
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
    portionSize: number
}

export const Users = (props: UsersPropsType) => {

    return <div>
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onCurrentPageChanged={props.onCurrentPageChanged} portionSize={props.portionSize} />
        </div>
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           followThunkCreator={props.followThunkCreator}
                                           unFollowThunkCreator={props.unFollowThunkCreator}/>
                )
            }
    </div>
}