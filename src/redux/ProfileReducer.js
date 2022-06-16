const ADD_POST = 'ADD-POST';
const SELECT_UPDATE_POST = 'SELECT-UPDATE-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

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
    profile: null,
}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
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
        case 'SELECT-UPDATE-POST':
            return {
                ...state,
                newPostChange: action.newText
            }
        case 'SET_USERS_PROFILE':
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}

export const addPost= () => ({type: ADD_POST});
export const selectUpdatePost = (text) => ({type: SELECT_UPDATE_POST, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export default ProfileReducer;