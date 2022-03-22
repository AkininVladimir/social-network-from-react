import React from 'react';
import classes from './Post.module.css';

const CommentRow = (props) => {
 return (
     <div className={classes.item}> {props.ava_g}
     </div>
 );
}

const Post = (props) => {

    return (
        <div className={classes.item}>
            <CommentRow ava_g = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUEphsBwnICXoMkyaNmtA23YHG0ClTynYIg&usqp=CAU"/>
        </div>
    );
}

export default Post;
