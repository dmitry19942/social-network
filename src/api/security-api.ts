import {GetCaptchaUrlResponseType, instance} from "./api";

// api
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
    }
}