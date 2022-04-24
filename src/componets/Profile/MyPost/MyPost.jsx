import React, {useRef} from 'react';
import classes from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, selectUpdatePostActionCreator} from "../../../redux/ProfileReducer";

const MyPost = (props) => {

    let postElements = props.postElements.ProfilePage.post.map(p => <Post name={p.name} message={p.message} likeCounter={p.likeCounter} dislikeCounter={p.dislikeCounter} postDate={p.postDate}/>);
    let newPostElement = useRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(selectUpdatePostActionCreator(text));
    }

    return (<div className={classes.MypostWrapper}>
        <div className={classes.CommentsFormBlock}>
            <div className={classes.CommentsAvatar}>
                <img alt="picture"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvdY18l2WSnl9JsRSQPn7dV7eCKxyIX72mQ&usqp=CAU"/>
            </div>
            <div className={classes.FormBlock}>
                <form action="#">
                        <textarea className={classes.CommentsText}
                                  onChange={onPostChange}
                                  id=""
                                  cols="30" rows="10"
                                  placeholder=""
                                  value={props.postElements.ProfilePage.newPostChange}
                                  ref={newPostElement}/>
                </form>
                <button onClick={addPost} className={classes.CommentsButton}>Отправить</button>
            </div>
        </div>
        <div>
            {postElements}
        </div>

    </div>);
}

export default MyPost;
/*let postData = [
    {
        id: 1,
        name: 'Алексей Новальный',
        message: 'Я присел на очень долго',
        likeCounter: '230',
        dislikeCounter: '34',
        postDate: 'Апрель 14, 2022'
    },
    {
        id: 2,
        name: 'Николай Расторгуев',
        message: 'Жизнь прекрасна! Улыбайтесь',
        likeCounter: '90',
        dislikeCounter: '21',
        postDate: 'Январь 30, 2022'
    },
    {
        id: 3,
        name: 'Владимир Соловьев',
        message: 'Есть две альтернативы',
        likeCounter: '45',
        dislikeCounter: '3',
        postDate: 'Ноябрь 17, 2021'
    }
]*/


/* [
 <Post name={postData[1].name} message={postData[1].message} likeCounter={postData[1].likeCounter} dislikeCounter={postData[1].dislikeCounter} postDate={postData[1].postDate}/>,
 <Post name={postData[0].name} message={postData[0].message} likeCounter={postData[0].likeCounter} dislikeCounter={postData[0].dislikeCounter} postDate={postData[0].postDate}/>,
 <Post name={postData[2].name} message={postData[2].message} likeCounter={postData[2].likeCounter} dislikeCounter={postData[2].dislikeCounter} postDate={postData[2].postDate}/>
]*/