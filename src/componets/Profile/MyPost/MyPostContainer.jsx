import React from 'react';
import {addPost, selectUpdatePost} from "../../../redux/ProfileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        post: state.ProfilePage.post,
        newPostChange: state.ProfilePage.newPostChange
    }
}



const MyPostContainer = connect(mapStateToProps, {selectUpdatePost, addPost})(MyPost);

export default MyPostContainer;

