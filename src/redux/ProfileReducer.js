import {profileAPI} from "../componets/API/API";

const ADD_POST = 'ADD_POST';
const SELECT_UPDATE_POST = 'SELECT_UPDATE_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    post: [
        {
            id: 1,
            name: 'Алексей Новальный',
            message: 'Я присел на очень долго',
            likeCounter: '230',
            dislikeCounter: '34',
            postDate: 'Апрель 14, 2022'
        },
        {
            id: 2,
            name: 'Николай Расторгуев',
            message: 'Жизнь прекрасна! Улыбайтесь',
            likeCounter: '90',
            dislikeCounter: '21',
            postDate: 'Январь 30, 2022'
        },
        {
            id: 3,
            name: 'Владимир Соловьев',
            message: 'Есть две альтернативы',
            likeCounter: '45',
            dislikeCounter: '3',
            postDate: 'Ноябрь 17, 2021'
        }
    ],
    newPostChange: '',
    userProfile: null,
    status: "",
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST):
            let newPost = {
                id: 4,
                name: 'no-name',
                message: state.newPostChange,
                likeCounter: '0',
                dislikeCounter: '0',
                postDate: 'Май 12, 2022'
            };
            return {
                ...state,
                newPostChange: '',
                post: [...state.post, (newPost)]

            }
        case (SELECT_UPDATE_POST):
            return {
                ...state,
                newPostChange: action.newText
            }
        case  (SET_USERS_PROFILE):

            return {
                ...state, userProfile: action.userProfile
            }
        case  (SET_USER_STATUS):

            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});

export const selectUpdatePost = (text) => ({type: SELECT_UPDATE_POST, newText: text});

export const setUsersProfile = (userProfile) => ({type: SET_USERS_PROFILE, userProfile});

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUsersProfile = (userId) => (dispatch) => {
    return (
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            })
    )

};

export const getUserStatus = (userId) => (dispatch) => {
    return (
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    )
};

export const updateUserStatus = (status) => (dispatch) => {
    return (
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }

            })
    )
};


export default ProfileReducer;