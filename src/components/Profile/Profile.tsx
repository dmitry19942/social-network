import React from "react";
import {Profile_PropsType, ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: null | Profile_PropsType
}

export function Profile(props: ProfilePropsType) {

    return <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
    </div>
}