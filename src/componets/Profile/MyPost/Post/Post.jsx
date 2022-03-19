import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}> 
            <img src="https://vraki.net/sites/default/files/inline/images/10_342.jpg" alt="" />
            {props.message}
           <span> 
           {props.value}
           </span>
        </div>
    );
}

export default Post;