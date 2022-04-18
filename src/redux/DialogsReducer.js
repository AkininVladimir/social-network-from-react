const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';

const DialogsReducer = (state, action) => {

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