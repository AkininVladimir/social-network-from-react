import React from 'react';
import {addMessageTextActionCreator, newMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialog from "./Dialog";

let DialogContainer = (props) => {

    let state = props.store.getState();

    let pushMessageText = () => {
        props.store.dispatch(addMessageTextActionCreator());
    }

    let newMessageText = (text) => {
        let action = newMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialog selectNewMessageText={newMessageText}
                pushMessageText={pushMessageText}
                dialog={state.DialogPage.dialog}
                say={state.DialogPage.say}
                addSayMessage={state.DialogPage.addSayMessage}/>

    )
}

export default DialogContainer;
