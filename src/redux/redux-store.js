import {combineReducers, legacy_createStore as createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogPage: DialogsReducer,
    UsersPage: UsersReducer,
    Auth:authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;

