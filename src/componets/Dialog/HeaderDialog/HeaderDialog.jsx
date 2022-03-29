import React from 'react';
import classes from './HeaderDialog.module.css';

const HeaderDialog = () => {

    return (
        <div className={classes.HeaderWrapper}>
            <div>
                <input type="text" placeholder="Поиск"></input>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_search.png" alt="seach"/>
            </div>
        </div>
    )
}

export default HeaderDialog;