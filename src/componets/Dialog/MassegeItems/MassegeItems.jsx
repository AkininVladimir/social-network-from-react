import React from 'react';
import classes from './MassegeItems.module.css';

const MassegeItems = (props) => {
    return (
        <div className={classes.MassageWrapper}>
            <div className={classes.Massege_item}>
                <p>{props.text}</p>
            </div>
        </div>


    );
}

export default MassegeItems;