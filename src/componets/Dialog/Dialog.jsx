import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialog/' + props.id; /*Перменная*/
    return (
        <div className={classes.User_List_Item}>
            <img src="#" alt=""/>
            <NavLink to={path}> {props.name}</NavLink> {/*Дублирующийся блок*/}
        </div>
    );
}

const MessageItems = (props) => {
    return (
        <div className={classes.Message_item}> {props.text}
        </div>
    );
}
const Dialog = () => {
    return (
        <div className={classes.Dialog_wrapper}>
            <div className={classes.Header}>
                <input type="text" placeholder="Поиск"></input>
            </div>
            <div className={classes.User_List}>
                <DialogItems name="Андрей" id="1"/>
                <DialogItems name="Светлана" id="2"/>
                <DialogItems name="Алексей" id="3"/>
                <DialogItems name="Инна" id="4"/>
                <DialogItems name="Василий" id="5"/>
                <DialogItems name="Юля" id="6"/>
            </div>
            <div className={classes.Message}>
                <MessageItems text='Привет! Как Дела? Как тови уроки по Уроки React JS'/>
                <MessageItems text='Привет! Мне очень нравятся эти занятия'/>
                <MessageItems text='Вы тоже занимаетесь?'/>

            </div>
        </div>

    )
}
export default Dialog;