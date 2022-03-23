import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div className={classes.ProfWrapp}>
            <div className={classes.ProfInfo}>
                <div className={classes.ProfAva}><img
                    src="https://newstracker.ru/attachments/5aacf663dce1819cdb5261d963af4f2fe49cba1f/store/crop_and_fill/0/373/1280/719/360/200/1c119e01a9211d435077e60036af13622ecceb08c07f6038e6c21064497d/1c119e01a9211d435077e60036af13622ecceb08c07f6038e6c21064497d.jpg"
                    alt="me_ava"/>
                    <button className={classes.BtnEdit}>Редактировать</button>
                </div>
                <div>
                    <h2>Виктория Василевская</h2>
                </div>
                <div>
                    <h4>New York</h4>
                </div>
                    <div className={classes.About}>
                        <ul className={classes.AboutList}>
                            <li><h5>Фото</h5><h6>25</h6></li>
                            <li><h5>Просмотров</h5><h6>1223</h6></li>
                        </ul>
                    </div>

            </div>
            <Post message='Привет как дела?' value='60'/>
            <Post message='Это мой первый пост' value='30'/>
            <Post message='Это мой первый пост' value='30'/>
        </div>
    )
}

export default MyPost;