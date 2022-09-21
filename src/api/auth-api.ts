import {
    APIResponseType,
    instance,
    LoginResponseDataType,
    MeResponseDataType,
    ResultCodeForCaptchaEnum,
    ResultCodesEnum
} from "./api";

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