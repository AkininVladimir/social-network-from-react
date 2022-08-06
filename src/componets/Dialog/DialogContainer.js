import React from 'react';
import {addMessageTextActionCreator, newMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialog: state.DialogPage.dialog,
        say: state.DialogPage.say,
        addSayMessage: state.DialogPage.addSayMessage
    }
}
export default compose(
    connect(mapStateToProps, {
        newMessageTextActionCreator,
        addMessageTextActionCreator
    }),
    withAuthRedirect
)(Dialog)
