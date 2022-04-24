import {combineReducers, legacy_createStore as createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogPage: DialogsReducer
});

let store = createStore (reducers);

export default store;

