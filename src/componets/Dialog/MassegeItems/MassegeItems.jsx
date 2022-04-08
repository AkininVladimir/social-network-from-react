import React from 'react';
import classes from './MassegeItems.module.css';

let MassegeItems = (props) => {

    return (
        <div className={classes.MassegeItemsWrapper}>
            <div className={classes.MassegeItems}>
                <p>{props.text}</p>
            </div>

        </div>
    );
}

export default MassegeItems;