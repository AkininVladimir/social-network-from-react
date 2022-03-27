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

    let dialogData = [
        {id: 1, name: 'Андрей'},
        {id: 2, name: 'Cветлана'},
        {id: 3, name: 'Алексей'},
        {id: 4, name: 'Инна'},
        {id: 5, name: 'Василий'},
        {id: 6, name: 'Юля'},
    ]

    let dialogElements =dialogData.map(d => <DialogItems name={d.name} id={d.id} />)
    //     [
    //     ,
    //     <DialogItems name={dialogData[1].name} id={dialogData[1].id}/>,
    //     <DialogItems name={dialogData[2].name} id={dialogData[2].id}/>,
    //     <DialogItems name={dialogData[3].name} id={dialogData[3].id}/>,
    //     <DialogItems name={dialogData[4].name} id={dialogData[4].id}/>,
    //     <DialogItems name={dialogData[5].name} id={dialogData[5].id}/>
    // ]

    let massegeData = [
        {id: 1, massege: 'Привет! Как Дела? Как твои уроки по Уроки React JS'},
        {id: 2, massege: 'Я рад и мне очень весело'},
        {id: 3, massege: 'Все круто!'}
    ]

    let massegeElements = massegeData.map (m => <MessageItems text={m.massege} id={m.id}/> )
        /*[
        <MessageItems text={massegeData[0].massege} id={massegeData[0].id}/>,
        <MessageItems text={massegeData[1].massege} id={massegeData[1].id}/>,
        <MessageItems text={massegeData[2].massege} id={massegeData[2].id}/>
    ]*/

    return (
        <div className={classes.Dialog_wrapper}>
            <div className={classes.Header}>
                <input type="text" placeholder="Поиск"></input>
            </div>
            <div className={classes.User_List}>
                {dialogElements}

            </div>
            <div className={classes.Message}>
                {massegeElements}
            </div>
        </div>

    );
}
export default Dialog;