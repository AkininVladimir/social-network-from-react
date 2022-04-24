const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';

let initialState = {
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

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-MESSAGE-TEXT':
            let newMessage = {
                id: 4,
                message: state.addSayMessage
            };
            state.say.push(newMessage);
            state.addSayMessage = '';
            return state;
        case 'NEW-MESSAGE':
            state.addSayMessage = action.newText;
            return state;
        default:
            return state;
    }
}
export const addMessageTextActionCreator = () => ({type: ADD_MESSAGE_TEXT});
export const newMessageTextActionCreator = (text) => ({type: NEW_MESSAGE, newText: text});
export default DialogsReducer;