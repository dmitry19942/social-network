import {APIResponseType, GetItemsType, instance} from "./api";

export const userAPI = {
    getUsers(currentPage: number, pageSize: number, term: string, friend: null | boolean = null) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(res => res.data)
    },
    deleteFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data) as Promise<APIResponseType>
    },
    postFollow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`)
            .then(res => res.data)
    }
}