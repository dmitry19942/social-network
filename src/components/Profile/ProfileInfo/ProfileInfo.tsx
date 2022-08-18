import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type Profile_PropsType  = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    userId: number
    photos: PhotosType
}

type ProfileInfoPropsType = {
    profile: Profile_PropsType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
    <div>
        <div>
            <img className={s.img}
                src='https://www.study.ru/uploads/server/jqMeRR0Fw70d5uNi.jpg' alt='' />
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/>
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>
    )
}