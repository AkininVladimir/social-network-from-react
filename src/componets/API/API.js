import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "5148e53d-daeb-4032-9292-71ff95c436f9"}

});


export const usersAPI = {
    getUsers: (currentPage =10, pageSize =1) => {
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
    follow: (id) => {
        return (
            instance.post(`follow/${id}`)
                .then(responce => {
                    return responce.data;
                })
        )
    },

    unfollow: (id) => {
        return (
            instance.delete(`follow/${id}`)
                .then(responce => {
                    return responce.data;
                })
        )
    },

}



