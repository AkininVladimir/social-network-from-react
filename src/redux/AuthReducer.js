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

      }

    default:
      return state;


  }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
  authMe.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))
      }

    });

}

export const login = (email, password, rememberMe) => (dispatch) => {
  authMe.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      }

    });
}

export const logout = () => (dispatch) => {
  authMe.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null))
      }

    });
}

export default AuthReducer;
