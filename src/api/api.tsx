import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'a1c29d8b-1c83-4c49-8a4c-55a3c1e75564'},

})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    getHeader() {
        return instance.get(`auth/me`)
            .then(res => {
                return res.data
            })
    },
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(res => {
                return res.data
            })
    },
    deleteFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => {
                return res.data
            })
    },
    postFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(res => {
                return res.data
            })
    }
}

