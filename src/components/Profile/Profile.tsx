import React from "react";
import {Profile_PropsType, ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: Profile_PropsType
    status: string
    updateStatus: (status: string) => void
}

export function Profile(props: ProfilePropsType) {

    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer />
    </div>
}