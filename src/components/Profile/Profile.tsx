import React from "react";
import s from './Profile.module.css';
import {MyPosts,  PostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePageType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
}

export function Profile(props: ProfilePageType) {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
}