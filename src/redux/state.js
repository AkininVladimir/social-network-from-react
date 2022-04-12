import React from 'react';

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
                {id: 1, massege: 'Привет! Как Дела? Как твои уроки по Уроки React JS'},
                {id: 2, massege: 'Я рад и мне очень весело'},
                {id: 3, massege: 'Все круто!'}
            ],
            addSayMassege: ''
        }
    },
    getState () {
        return this._state;
    },
    _callSubscriber () {},

    addPost(newMessage)  {
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
       this._callSubscriber (this._state);

    },
    updateNewPost(newText) {
        this._state.ProfilePage.newPostChange = newText;
        this._callSubscriber (this._state);

    },
    addMassegeText() {
        let newMassege = {
            id: 4,
            massege: this._state.DialogsPage.addSayMassege
        };
        this._state.DialogsPage.say.push(newMassege);
        this._state.DialogsPage.addSayMassege = '';
        this._callSubscriber (this._state);
    },

    newMassegeText(newText)  {
        this._state.DialogsPage.addSayMassege = newText;
        this._callSubscriber (this._state);
    },

    subscriber (observe) {this._callSubscriber = observe;}
}

window.store = store;
export default store;