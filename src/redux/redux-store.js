import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";

let reducers= combineReducers(
    {
        ProfilePage: ProfileReducer,
        DialogPage: DialogsReducer,
        UsersPage: UsersReducer,
        Auth: AuthReducer,
    })

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;

/*applyMiddleware  - промежуточные слои которые необходимы для конверерного потока необходмо в консоли проинсталировать npm i redux-thunk*/
/*далее thunkMiddleware промежуточный слой передаем applyMiddleware  и импортируем по deault*/