import React from 'react';
import {addPostActionCreator, selectUpdatePostActionCreator} from "../../../redux/ProfileReducer";
import MyPost from "./MyPost";
import storeContext from "../../../storeContext";

const MyPostContainer = () => {

    return (
        <storeContext.Consumer>
            {(store)=>{
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = selectUpdatePostActionCreator(text)
                        store.dispatch(action);
                    }
                        return <MyPost selectUpdatePost={onPostChange}
                                       addPost={addPost}
                                       post={store.getState().ProfilePage.post}
                                       newPostChange={store.getState().ProfilePage.newPostChange}/>
                    }
                }
            </storeContext.Consumer>
    )
}

export default MyPostContainer;
