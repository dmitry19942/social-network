import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Button} from "../common/Button/Button";

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
                        <img style={{marginBottom: '5px', marginTop: '5px'}} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} className={s.userPhoto} alt=''/>
                            </NavLink>
                    </div>
                    <div>
                        {props.user.followed ?
                            <Button classname={s.buttonSecondary} name={'Unfollow'} onClick={() => {
                                props.unFollowThunkCreator(props.user.id)}} disabled={props.followingInProgress.some(id => id === props.user.id)} />
                            :
                            <Button name={'Follow'} onClick={() => {
                                props.followThunkCreator(props.user.id)}} disabled={props.followingInProgress.some(id => id === props.user.id)}  />
                        }
                    </div>
                </span>
            <span>
                        <h3>{props.user.name}</h3>
                        <h3 style={{marginTop: '-5px'}}>{props.user.status}</h3>
                        <h3 style={{marginTop: '-5px'}}>{'id: '}{props.user.id}</h3>
                </span>
        </div>)
}