import React from 'react';
import {addPostActionCreator, selectUpdatePostActionCreator} from "../../../redux/ProfileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        post: state.ProfilePage.post,
        newPostChange: state.ProfilePage.newPostChange
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        selectUpdatePost: (text) => {
            let action = selectUpdatePostActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;

