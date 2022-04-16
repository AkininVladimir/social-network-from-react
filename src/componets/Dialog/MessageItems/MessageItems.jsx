import React from 'react';
import classes from './MessageItems.module.css';

let MessageItems = (props) => {

    return (
        <div className={classes.MessageItemsWrapper}>
            <div className={classes.MessageItems}>
                <p>{props.text}</p>
            </div>

        </div>
    );
}

export default MessageItems;