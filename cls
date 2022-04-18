[1mdiff --git a/src/componets/Dialog/Dialog.jsx b/src/componets/Dialog/Dialog.jsx[m
[1mindex c464149..84c1160 100644[m
[1m--- a/src/componets/Dialog/Dialog.jsx[m
[1m+++ b/src/componets/Dialog/Dialog.jsx[m
[36m@@ -3,7 +3,7 @@[m [mimport classes from './Dialog.module.css';[m
 import DialogItems from "./DialogItems/DialogItems";[m
 import MessageItems from "./MessageItems/MessageItems";[m
 import HeaderDialog from "./HeaderDialog/HeaderDialog";[m
[31m-import {addMessageTextActionCreator, newMessageTextActionCreator} from "../../redux/state";[m
[32m+[m[32mimport {addMessageTextActionCreator, newMessageTextActionCreator} from "../../redux/DialogsReducer";[m
 [m
 let Dialog = (props) => {[m
 [m
[36m@@ -14,11 +14,11 @@[m [mlet Dialog = (props) => {[m
     let messageElement = useRef();[m
 [m
     let pushMessageText = () => {[m
[31m-        props.dispatch(addMessageTextActionCreator())[m
[32m+[m[32m        props.dispatch(addMessageTextActionCreator());[m
     }[m
 [m
[31m-    let newMessageText = () => {[m
[31m-        let text = messageElement.current.value;[m
[32m+[m[32m    let newMessageText = (event) => {[m
[32m+[m[32m        let text = event.target.value;[m
         props.dispatch(newMessageTextActionCreator (text));[m
     }[m
 [m
[1mdiff --git a/src/componets/Profile/MyPost/MyPost.jsx b/src/componets/Profile/MyPost/MyPost.jsx[m
[1mindex 5138c37..dcc079d 100644[m
[1m--- a/src/componets/Profile/MyPost/MyPost.jsx[m
[1m+++ b/src/componets/Profile/MyPost/MyPost.jsx[m
[36m@@ -1,7 +1,7 @@[m
 import React, {useRef} from 'react';[m
 import classes from './MyPost.module.css';[m
 import Post from "./Post/Post";[m
[31m-import {addPostActionCreator, selectUpdatePostActionCreator} from "../../../redux/state";[m
[32m+[m[32mimport {addPostActionCreator, selectUpdatePostActionCreator} from "../../../redux/ProfileReducer";[m
 [m
 const MyPost = (props) => {[m
     let postElements = props.postElements.ProfilePage.post.map(p => <Post name={p.name}[m
[1mdiff --git a/src/redux/DialogsReducer.js b/src/redux/DialogsReducer.js[m
[1mindex e69de29..d639b2e 100644[m
[1m--- a/src/redux/DialogsReducer.js[m
[1m+++ b/src/redux/DialogsReducer.js[m
[36m@@ -0,0 +1,24 @@[m
[32m+[m[32mconst ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';[m
[32m+[m[32mconst NEW_MESSAGE = 'NEW-MESSAGE';[m
[32m+[m
[32m+[m[32mconst DialogsReducer = (state, action) => {[m
[32m+[m
[32m+[m[32m    switch (action.type) {[m
[32m+[m[32m        case 'ADD-MESSAGE-TEXT':[m
[32m+[m[32m            let newMessage = {[m
[32m+[m[32m                id: 4,[m
[32m+[m[32m                message: state.addSayMessage[m
[32m+[m[32m            };[m
[32m+[m[32m            state.say.push(newMessage);[m
[32m+[m[32m            state.addSayMessage = '';[m
[32m+[m[32m            return state;[m
[32m+[m[32m        case 'NEW-MESSAGE':[m
[32m+[m[32m            state.addSayMessage = action.newText;[m
[32m+[m[32m            return state;[m
[32m+[m[32m        default:[m
[32m+[m[32m            return state;[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m[32mexport const addMessageTextActionCreator = () => ({type: ADD_MESSAGE_TEXT});[m
[32m+[m[32mexport const newMessageTextActionCreator = (text) => ({type: NEW_MESSAGE, newText: text});[m
[32m+[m[32mexport default DialogsReducer;[m
\ No newline at end of file[m
[1mdiff --git a/src/redux/ProfileReducer.js b/src/redux/ProfileReducer.js[m
[1mindex 605c630..998e02b 100644[m
[1m--- a/src/redux/ProfileReducer.js[m
[1m+++ b/src/redux/ProfileReducer.js[m
[36m@@ -1,26 +1,28 @@[m
 const ADD_POST = 'ADD-POST';[m
 const SELECT_UPDATE_POST = 'SELECT-UPDATE-POST';[m
 [m
[31m-const ProfilePageReducer = (state, action) => {[m
[32m+[m[32mconst ProfileReducer = (state, action) => {[m
[32m+[m
     switch (action.type) {[m
[31m-        case ADD-POST:[m
[32m+[m[32m        case 'ADD-POST':[m
             let newPost = {[m
                 id: 4,[m
                 name: 'no-name',[m
[31m-                message: this._state.ProfilePage.newPostChange,[m
[32m+[m[32m                message: state.newPostChange,[m
                 likeCounter: '0',[m
                 dislikeCounter: '0',[m
                 postDate: 'Май 12, 2022'[m
             };[m
[31m-            state.ProfilePage.post.push(newPost);[m
[31m-            state.ProfilePage.newPostChange = '';[m
[31m-        case SELECT-UPDATE-POST:[m
[31m-            state.ProfilePage.newPostChange = action.newText;[m
[31m-            callSubscriber();[m
[31m-[m
[31m-    return state;[m
[32m+[m[32m            state.post.push(newPost);[m
[32m+[m[32m            state.newPostChange = '';[m
[32m+[m[32m            return state;[m
[32m+[m[32m        case 'SELECT-UPDATE-POST':[m
[32m+[m[32m            state.newPostChange = action.newText;[m
[32m+[m[32m            return state;[m
[32m+[m[32m        default:[m
[32m+[m[32m            return state;[m
[32m+[m[32m    }[m
 }[m
[31m-[m
[31m-[m
[31m-[m
[31m-export default ProfilePageReducer;[m
\ No newline at end of file[m
[32m+[m[32mexport const addPostActionCreator = () => ({type: ADD_POST});[m
[32m+[m[32mexport const selectUpdatePostActionCreator = (text) => ({type: SELECT_UPDATE_POST, newText: text});[m
[32m+[m[32mexport default ProfileReducer;[m
\ No newline at end of file[m
[1mdiff --git a/src/redux/state.js b/src/redux/state.js[m
[1mindex ad5ae51..25679e1 100644[m
[1m--- a/src/redux/state.js[m
[1m+++ b/src/redux/state.js[m
[36m@@ -1,11 +1,6 @@[m
 import React from 'react';[m
[31m-[m
[31m-/* Вынносим константы в виде тектовых переменных которые не буду изменяться т.н. actionType */[m
[31m-const ADD_POST = 'ADD-POST';[m
[31m-const SELECT_UPDATE_POST = 'SELECT-UPDATE-POST';[m
[31m-const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';[m
[31m-const NEW_MESSAGE = 'NEW-MESSAGE';[m
[31m-/* Вынносим константы в виде тектовых переменных которые не буду изменяться т.н. actionType */[m
[32m+[m[32mimport DialogsReducer from "./DialogsReducer";[m
[32m+[m[32mimport ProfileReducer from "./ProfileReducer";[m
 [m
 let store = {[m
     _state: {[m
[36m@@ -66,43 +61,11 @@[m [mlet store = {[m
         this._callSubscriber = observe;[m
     },[m
     dispatch(action) {[m
[31m-        if (action.type === 'ADD-POST') {[m
[31m-            let newPost = {[m
[31m-                id: 4,[m
[31m-                name: 'no-name',[m
[31m-                message: this._state.ProfilePage.newPostChange,[m
[31m-                likeCounter: '0',[m
[31m-                dislikeCounter: '0',[m
[31m-                postDate: 'Май 12, 2022'[m
[31m-            };[m
[31m-            this._state.ProfilePage.post.push(newPost);[m
[31m-            this._state.ProfilePage.newPostChange = '';[m
[31m-            this._callSubscriber();[m
[31m-        } else if (action.type === "SELECT-UPDATE-POST") {[m
[31m-            this._state.ProfilePage.newPostChange = action.newText;[m
[31m-            this._callSubscriber();[m
[31m-        } else if (action.type === 'ADD-MESSAGE-TEXT') {[m
[31m-            let newMessage = {[m
[31m-                id: 4,[m
[31m-                message: this._state.DialogsPage.addSayMessage[m
[31m-            };[m
[31m-            this._state.DialogsPage.say.push(newMessage);[m
[31m-            this._state.DialogsPage.addSayMessage = '';[m
[31m-            this._callSubscriber();[m
[31m-        } else if (action.type === 'NEW-MESSAGE') {[m
[31m-            this._state.DialogsPage.addSayMessage = action.newText;[m
[31m-            this._callSubscriber();[m
[31m-        }[m
[31m-[m
[32m+[m[32m        this._state.ProfilePage = ProfileReducer( this._state.ProfilePage, action);[m
[32m+[m[32m        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action);[m
[32m+[m[32m        this._callSubscriber(this._state);[m
     }[m
 }[m
[31m-/*создаем рефакторинг пердачи dispatch, а именно action creator для объектов с изменяющимися данными и пердаем их в UI */[m
[31m-export const addPostActionCreator = () => ({type: ADD_POST});[m
[31m-export const selectUpdatePostActionCreator = (text) => ({type: SELECT_UPDATE_POST, newText: text});[m
[31m-export const addMessageTextActionCreator = () => ({type: ADD_MESSAGE_TEXT});[m
[31m-[m
[31m-export const newMessageTextActionCreator = (text) => ({type: NEW_MESSAGE, newText: text});[m
[31m-/*создаем рефакторинг пердачи dispatch, а именно action creator для объектов с изменяющимися данными и пердаем их в UI */[m
 [m
 window.store = store;[m
 export default store;[m
[36m@@ -138,4 +101,47 @@[m [mexport default store;[m
         newMassegeText(newText) {[m
             this._state.DialogsPage.addSayMassege = newText;[m
             this._callSubscriber(this._state);[m
[31m-        },*/[m
\ No newline at end of file[m
[32m+[m[32m        },*/[m
[32m+[m
[32m+[m[32m/* Вынносим константы в виде тектовых переменных которые не буду изменяться т.н. actionType */[m
[32m+[m[32m/*const ADD_POST = 'ADD-POST';[m
[32m+[m[32mconst SELECT_UPDATE_POST = 'SELECT-UPDATE-POST';[m
[32m+[m[32mconst ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';[m
[32m+[m[32mconst NEW_MESSAGE = 'NEW-MESSAGE';*/[m
[32m+[m[32m/* Вынносим константы в виде тектовых переменных которые не буду изменяться т.н. actionType */[m
[32m+[m
[32m+[m[32m/*создаем рефакторинг пердачи dispatch, а именно action creator для объектов с изменяющимися данными и пердаем их в UI */[m
[32m+[m[32m/*export const addPostActionCreator = () => ({type: ADD_POST});[m
[32m+[m[32mexport const selectUpdatePostActionCreator = (text) => ({type: SELECT_UPDATE_POST, newText: text});[m
[32m+[m[32mexport const addMessageTextActionCreator = () => ({type: ADD_MESSAGE_TEXT});[m
[32m+[m[32mexport const newMessageTextActionCreator = (text) => ({type: NEW_MESSAGE, newText: text});*/[m
[32m+[m[32m/*создаем рефакторинг пердачи dispatch, а именно action creator для объектов с изменяющимися данными и пердаем их в UI */[m
[32m+[m
[32m+[m
[32m+[m[32m/* if (action.type === 'ADD-POST') {[m
[32m+[m[32m            let newPost = {[m
[32m+[m[32m                id: 4,[m
[32m+[m[32m                name: 'no-name',[m
[32m+[m[32m                message: this._state.ProfilePage.newPostChange,[m
[32m+[m[32m                likeCounter: '0',[m
[32m+[m[32m                dislikeCounter: '0',[m
[32m+[m[32m                postDate: 'Май 12, 2022'[m
[32m+[m[32m            };[m
[32m+[m[32m            this._state.ProfilePage.post.push(newPost);[m
[32m+[m[32m            this._state.ProfilePage.newPostChange = '';[m
[32m+[m[32m            this._callSubscriber();[m
[32m+[m[32m        } else if (action.type === "SELECT-UPDATE-POST") {[m
[32m+[m[32m            this._state.ProfilePage.newPostChange = action.newText;[m
[32m+[m[32m            this._callSubscriber();[m
[32m+[m[32m        } else if (action.type === 'ADD-MESSAGE-TEXT') {[m
[32m+[m[32m            let newMessage = {[m
[32m+[m[32m                id: 4,[m
[32m+[m[32m                message: this._state.DialogsPage.addSayMessage[m
[32m+[m[32m            };[m
[32m+[m[32m            this._state.DialogsPage.say.push(newMessage);[m
[32m+[m[32m            this._state.DialogsPage.addSayMessage = '';[m
[32m+[m[32m            this._callSubscriber();[m
[32m+[m[32m        } else if (action.type === 'NEW-MESSAGE') {[m
[32m+[m[32m            this._state.DialogsPage.addSayMessage = action.newText;[m
[32m+[m[32m            this._callSubscriber();[m
[32m+[m[32m        }*/[m
\ No newline at end of file[m
