import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";


let reducers= combineReducers(
    {
        ProfilePage: ProfileReducer,
        DialogPage: DialogsReducer,
        UsersPage: UsersReducer,
        Auth: AuthReducer,
    })

let store = createStore(reducers)

window.store = store;

export default store;

