import React from "react";
import s from './Profile.module.css';
import {MyPosts,  PostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes} from "../../redux/state";


type ProfileType = {
    posts: Array<PostsType>
    dispatch: (action: ActionTypes) => void
    newPostText: string
}

export function Profile(props: ProfileType) {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts}
                 dispatch={props.dispatch}
                 newPostText={props.newPostText}
        />
    </div>
}