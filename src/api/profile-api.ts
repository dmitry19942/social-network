import {Profile_PropsType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {APIResponseType, instance, SavePhotoResponseDataType} from "./api";

// api
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