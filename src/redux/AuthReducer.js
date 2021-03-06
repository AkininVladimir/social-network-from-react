import {authMe} from "../componets/API/API";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state;


    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}});

export const getAuthUserData = () => (dispatch) => {
    authMe.me()
        .then(data => {

            if (data.resultCode === 0) {
                /*let {id, email, login} = response.data.data*/
                dispatch(setAuthUserData(data.data))
            }

        });

}


export default AuthReducer;