import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = () => {
    return (
        <div className={classes.Dialog_wrapper}>
            <div className={classes.Header}>
                <input type="text" placeholder="Поиск"></input>
            </div>
            <div className={classes.User_List}>
                <div className={classes.User_List_Item}>
                    <img src="#" alt=""/>
                    <NavLink to='/dialog/1'>Андрей</NavLink>
                </div>
                <div className={classes.User_List_Item}>
                    <img src="#" alt=""/>
                    <NavLink to='/dialog/2'>Светлана</NavLink>
                </div>
                <div className={classes.User_List_Item}>
                    <img src="#" alt=""/>
                    <NavLink to='/dialog/3'>Алексей</NavLink>
                </div>
                <div className={classes.User_List_Item}>
                    <img src="#" alt=""/>
                    <NavLink to='/dialog/4'>Инна</NavLink>
                </div>
                <div className={classes.User_List_Item}>
                    <img src="#" alt=""/>
                    <NavLink to='/dialog/5'>Василий</NavLink>
                </div>
                <div className={classes.User_List_Item}>
                    <img src="#" alt=""/>
                    <NavLink to='/dialog/6'>Юля</NavLink>
                </div>
            </div>
            <div className={classes.Message}>
                <div className={classes.Message_item}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                <div className={classes.Message_item}>How are you?</div>
            </div>

        </div>


)
}
export default Dialog;