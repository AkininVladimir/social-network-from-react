import React from 'react';
import classes from './HeaderDialog.module.css';

const HeaderDialog = () => {

    return (
        <div className={classes.HeaderWrapper}>
            <div className={classes.HeaderInput}>
                <input type="text" placeholder="Поиск"></input>
            </div>
        </div>
    )
}

export default HeaderDialog;