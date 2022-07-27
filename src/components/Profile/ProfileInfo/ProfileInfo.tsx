import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";



export type Profile_PropsType  = {
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {small: string | undefined, large: string | undefined}
}

type ProfileInfoPropsType = {
    profile: Profile_PropsType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
    <div>
        <div>
            <img className={s.img}
                src='https://www.study.ru/uploads/server/jqMeRR0Fw70d5uNi.jpg' alt='' />
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <ProfileStatus status={'Hello my friends'} />
        </div>
    </div>
    )
}