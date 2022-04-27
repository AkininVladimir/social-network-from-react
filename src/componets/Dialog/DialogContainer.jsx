import React from 'react';
import {addMessageTextActionCreator, newMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialog from "./Dialog";
import storeContext from "../../storeContext";

let DialogContainer = () => {

    return (
        <storeContext.Consumer>
            {(store) => {
                let state = store.getState();

                let pushMessageText = () => {
                    store.dispatch(addMessageTextActionCreator());
                }

                let newMessageText = (text) => {
                    let action = newMessageTextActionCreator(text);
                    store.dispatch(action);
                }

                return <Dialog selectNewMessageText={newMessageText}
                               pushMessageText={pushMessageText}
                               dialog={store.getState().DialogPage.dialog}
                               say={store.getState().DialogPage.say}
                               addSayMessage={store.getState().DialogPage.addSayMessage}/>
            }

        }
        </storeContext.Consumer>
    )
}

export default DialogContainer;
