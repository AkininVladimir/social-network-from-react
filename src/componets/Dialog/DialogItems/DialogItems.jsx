import React from 'react';
import classes from './DialogItems.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialog/' + props.id; /*Перменная*/
    return (
        <div className={classes.UserListWrapper}>
            <div className={classes.UserListItem}>
                <img src="#" alt=""/>
                <NavLink to={path}><p>{props.name}</p></NavLink> {/*Дублирующийся блок*/}
            </div>
        </div>

    )
}
export default DialogItems;