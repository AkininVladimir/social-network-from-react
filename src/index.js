import './index.css';
import {rerenderAllTree} from "./render";
import State from "./redux/state";
import {addPost} from "./redux/state";
/*let postData = [
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
]

let dialogData = [
    {id: 1, name: 'Андрей'},
    {id: 2, name: 'Cветлана'},
    {id: 3, name: 'Алексей'},
    {id: 4, name: 'Инна'},
    {id: 5, name: 'Василий'},
    {id: 6, name: 'Юля'}

]

let massegeData = [
    {id: 1, massege: 'Привет! Как Дела? Как твои уроки по Уроки React JS'},
    {id: 2, massege: 'Я рад и мне очень весело'},
    {id: 3, massege: 'Все круто!'}
]*/

rerenderAllTree(State, addPost);

