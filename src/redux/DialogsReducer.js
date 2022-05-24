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

    let stateCopy = {
        ...state,
        /*say: [...state.say]*/ /*если не требуется делать более глубокое копитрование, то достаточно поверхностного*/
    };

    switch (action.type) {
        case 'ADD-MESSAGE-TEXT':
            let newMessage = {
                id: 4,
                message: state.addSayMessage
            };
            stateCopy.say.push(newMessage);
            stateCopy.addSayMessage = '';
            return stateCopy;
        case 'NEW-MESSAGE':
            stateCopy.addSayMessage = action.newText;
            return stateCopy;
        default:
            return stateCopy;
    }
}
export const addMessageTextActionCreator = () => ({type: ADD_MESSAGE_TEXT});
export const newMessageTextActionCreator = (text) => ({type: NEW_MESSAGE, newText: text});
export default DialogsReducer;