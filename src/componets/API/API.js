import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "5148e53d-daeb-4032-9292-71ff95c436f9"}

});


export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })

        )
    },
    authMe: () => {
        return (
            instance.get('/auth/me')
                .then(response => {
                    return response.data;
                })
        )
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },

}



