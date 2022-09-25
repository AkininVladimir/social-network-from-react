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
  getProfile: (userId) => {
    console.warn("Please use profileAPI method")
    return (
      profileAPI.getProfile(userId)
    )
  }

}

export const profileAPI = {
  getProfile: (userId) => {
    return (
      instance.get(`profile/${userId}`)
    )
  },
  getStatus: (userId) => {
    return (
      instance.get(`/profile/status/${userId}`)
    )
  },
  updateStatus: (status) => {
    return (
      instance.put(`/profile/status`, {status: status})
    )
  },

}

export const authMe = {
  me: () => {
    return (
      instance.get(`/auth/me`)
    )

  },
  login: (email, password, rememberMe = false) => {
    return (
      instance.post(`auth/login`, {email, password, rememberMe})
    )
  },
  logout: () => {
    return (
      instance.delete(`auth/login`)
    )
  }
}
