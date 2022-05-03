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

/*const MyPostContainer = (props) => {

    return (
        <storeContext.Consumer>
            {(store)=>{
                    const state = store.getState();
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
            </storeContext.Consumer>,
    )
}*/