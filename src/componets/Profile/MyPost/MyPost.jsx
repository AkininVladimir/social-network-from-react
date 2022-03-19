import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';
const MyPost = () => {
    return (
            <div>My posts
                <textarea nameName={classes.textarea} id="" cols="30" rows="10"></textarea>
                <button>Отправить</button>
                <Post message = 'Привет как дела?' value = '60' />
                <Post message = 'Это мой первый пост' value = '30'/>
            </div>
    )
}

export default MyPost;