const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, follow: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, follow: true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }

}

export const followActionCreator = (userid) => ({type: FOLLOW, userid});
export const unfollowActionCreator = (userid) => ({type: UNFOLLOW, userid});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export default usersReducer;