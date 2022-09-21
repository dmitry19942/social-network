import axios from "axios";
import {PhotosType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {UserType} from "../redux/users-reducer";

// types
export type GetItemsType = {
    items: UserType[]
    error: null | string
    totalCount: number
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages : Array<string>
    fieldsErrors: Array<string>
    resultCode: RC
}
export type MeResponseDataType = {
    id: number
    email: string
    login: string
}
export type LoginResponseDataType = {
    userId: number
}
export type SavePhotoResponseDataType = {
    photos: PhotosType
}
export type GetCaptchaUrlResponseType = {
    url: string
}

// instance
export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'a1c29d8b-1c83-4c49-8a4c-55a3c1e75564'},
})


