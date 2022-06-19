import {combineReducers, legacy_createStore as createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogPage: DialogsReducer,
    UsersPage: UsersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

