import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    onCurrentPageChanged: (currentPage: number) => void
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
                            <button onClick={()=> {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {'API-KEY': 'a1c29d8b-1c83-4c49-8a4c-55a3c1e75564'}})
                                    .then(res => {
                                        if(res.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })}
                                }> Unfollow</button> :
                            <button onClick={()=> {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,  headers: {'API-KEY': 'a1c29d8b-1c83-4c49-8a4c-55a3c1e75564'}})
                                    .then(res => {
                                        if(res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })}
                            }> Follow</button> }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}