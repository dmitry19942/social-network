import axios from "axios";
import {PhotosType, Profile_PropsType} from "../components/Profile/ProfileInfo/ProfileInfo";
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
type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseDataType = {
    userId: number
}
type SavePhotoResponseDataType = {
    photos: PhotosType
}
type GetCaptchaUrlResponseType = {
    url: string
}

// instance
export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'a1c29d8b-1c83-4c49-8a4c-55a3c1e75564'},
})

// api

export const authAPI = {
    getLogin() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<Profile_PropsType>(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status})

    },
    savePhoto(file: File) {
        let formData = new FormData()
        formData.append('image', file)

        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: Profile_PropsType) {
        return instance.put<APIResponseType>(`profile`, profile)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
    }
}
