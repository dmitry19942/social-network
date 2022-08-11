import React from "react";
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import {User} from "./User";


export type UsersPropsType = {
    users: UserType[]
    currentPage: number
    // totalUsersCount: number
    // pageSize: number
    onCurrentPageChanged: (currentPage: number) => void
    followingInProgress: number[]
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void

}

export const Users = (props: UsersPropsType) => {

    // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p.toString()} onClick={() => {
                    props.onCurrentPageChanged(p)
                }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
        </div>
        {/*<Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onCurrentPageChanged={props.onCurrentPageChanged} />*/}
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