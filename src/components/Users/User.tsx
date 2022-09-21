import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

// types
export type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

// component
export const User = (props: UserPropsType) => {
    return (
        <div>
            <span>
                <div>
                        <NavLink to={'/social-network/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} className={s.userPhoto} alt=''/>
                            </NavLink>
                    </div>
                    <div>
                        {props.user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.unFollowThunkCreator(props.user.id)
                            }
                            }> Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.followThunkCreator(props.user.id)
                            }
                            }> Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                        <div>{'id: '}{props.user.id}</div>
                    </span>
                </span>
        </div>)
}