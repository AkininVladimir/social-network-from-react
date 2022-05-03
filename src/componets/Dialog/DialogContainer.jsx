import React from 'react';
import {addMessageTextActionCreator, newMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialog: state.DialogPage.dialog,
        say: state.DialogPage.say,
        addSayMessage: state.DialogPage.addSayMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        selectNewMessageText: (text) => {
            let action = newMessageTextActionCreator(text);
            dispatch(action);
        },
        pushMessageText: () => {
            dispatch(addMessageTextActionCreator())
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;

/*let DialogContainer = () => {

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
}*/