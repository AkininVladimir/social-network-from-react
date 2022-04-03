import React from 'react';
import classes from './DialogItems.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialog/' + props.id; /*Перменная*/
    return (
            <div className={classes.UserListItem}>
                <img src="#" alt=""/>
                <NavLink to={path}>{props.name}</NavLink> {/*Дублирующийся блок*/}
            </div>

    );
}
export default DialogItems;