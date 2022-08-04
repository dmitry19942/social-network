import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

export type UsersPropsType = {
    users: UserType[]
    currentPage: number
    onCurrentPageChanged: (currentPage: number) => void
    followingInProgress: number[]
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void

}

export const Users = (props: UsersPropsType) => {

    // let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= 10 ; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={()=> {
                    props.onCurrentPageChanged(p)}} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt=''/>
                            </NavLink>
                    </div>
                    <div>
                        { u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=> {
                                props.unFollowThunkCreator(u.id)}
                                }> Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=> {
                                props.followThunkCreator(u.id)}
                            }> Follow</button> }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{'id: '}{u.id}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}