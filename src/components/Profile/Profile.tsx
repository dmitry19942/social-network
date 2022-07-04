import React from "react";
import s from './Profile.module.css';
import {MyPosts,  PostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {store, StoreType} from "../../redux/store";



type ProfileType = {
    store: StoreType
}

export function Profile(props: ProfileType) {

    return <div>
        <ProfileInfo />
        <MyPostsContainer store={store}
        />
    </div>
}