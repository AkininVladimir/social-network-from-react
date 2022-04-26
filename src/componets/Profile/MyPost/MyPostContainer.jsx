import React from 'react';
import {addPostActionCreator, selectUpdatePostActionCreator} from "../../../redux/ProfileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = selectUpdatePostActionCreator(text)
        props.store.dispatch(action);
    }

    return (
        <MyPost selectUpdatePost={onPostChange}
                addPost={addPost}
                post={state.ProfilePage.post}
                newPostChange={state.ProfilePage.newPostChange}/>
    )
}

export default MyPostContainer;
