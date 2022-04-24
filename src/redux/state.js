
/*import React from 'react';
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";

let store = {
    _state: {
        ProfilePage: {
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
            newPostChange: ''
        },

        DialogsPage: {
            dialog: [
                {id: 1, name: 'Андрей'},
                {id: 2, name: 'Cветлана'},
                {id: 3, name: 'Алексей'},
                {id: 4, name: 'Инна'},
                {id: 5, name: 'Василий'},
                {id: 6, name: 'Юля'}

            ],
            say: [
                {id: 1, message: 'Привет! Как Дела? Как твои уроки по Уроки React JS'},
                {id: 2, message: 'Я рад и мне очень весело'},
                {id: 3, message: 'Все круто!'}
            ],
            addSayMessage: ''
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscriber(observe) {
        this._callSubscriber = observe;
    },
    dispatch(action) {
        this._state.ProfilePage = ProfileReducer( this._state.ProfilePage, action);
        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;*/

/*    addPost(newMessage) {
            let newPost = {
                id: 4,
                name: 'no-name',
                message: this._state.ProfilePage.newPostChange,
                likeCounter: '0',
                dislikeCounter: '0',
                postDate: 'Май 12, 2022'
            };
            newMessage = this._state.ProfilePage.post.push(newPost);
            this._state.ProfilePage.newPostChange = '';
            this._callSubscriber(this._state);

        },
        updateNewPost(newText) {
            this._state.ProfilePage.newPostChange = newText;
            this._callSubscriber(this._state);

        },
        addMassegeText() {
            let newMassege = {
                id: 4,
                massege: this._state.DialogsPage.addSayMassege
            };
            this._state.DialogsPage.say.push(newMassege);
            this._state.DialogsPage.addSayMassege = '';
            this._callSubscriber(this._state);
        },
        newMassegeText(newText) {
            this._state.DialogsPage.addSayMassege = newText;
            this._callSubscriber(this._state);
        },*/

/* Вынносим константы в виде тектовых переменных которые не буду изменяться т.н. actionType */
/*const ADD_POST = 'ADD-POST';
const SELECT_UPDATE_POST = 'SELECT-UPDATE-POST';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';*/
/* Вынносим константы в виде тектовых переменных которые не буду изменяться т.н. actionType */

/*создаем рефакторинг пердачи dispatch, а именно action creator для объектов с изменяющимися данными и пердаем их в UI */
/*export const addPostActionCreator = () => ({type: ADD_POST});
export const selectUpdatePostActionCreator = (text) => ({type: SELECT_UPDATE_POST, newText: text});
export const addMessageTextActionCreator = () => ({type: ADD_MESSAGE_TEXT});
export const newMessageTextActionCreator = (text) => ({type: NEW_MESSAGE, newText: text});*/
/*создаем рефакторинг пердачи dispatch, а именно action creator для объектов с изменяющимися данными и пердаем их в UI */


/* if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                name: 'no-name',
                message: this._state.ProfilePage.newPostChange,
                likeCounter: '0',
                dislikeCounter: '0',
                postDate: 'Май 12, 2022'
            };
            this._state.ProfilePage.post.push(newPost);
            this._state.ProfilePage.newPostChange = '';
            this._callSubscriber();
        } else if (action.type === "SELECT-UPDATE-POST") {
            this._state.ProfilePage.newPostChange = action.newText;
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE-TEXT') {
            let newMessage = {
                id: 4,
                message: this._state.DialogsPage.addSayMessage
            };
            this._state.DialogsPage.say.push(newMessage);
            this._state.DialogsPage.addSayMessage = '';
            this._callSubscriber();
        } else if (action.type === 'NEW-MESSAGE') {
            this._state.DialogsPage.addSayMessage = action.newText;
            this._callSubscriber();
        }*/