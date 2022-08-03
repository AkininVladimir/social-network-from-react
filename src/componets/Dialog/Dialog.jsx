import React, {useRef} from 'react';
import classes from './Dialog.module.css';
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import HeaderDialog from "./HeaderDialog/HeaderDialog";



let Dialog = (props) => {

    let dialogElements = props.dialog.map(d => <DialogItems key={d.id} name={d.name} id={d.id}/>);

    let messageElements = props.say.map(m => <MessageItems key={m.id} text={m.message}/>);

    let messageElement = useRef();

    let pushMessageText = () => {
        props.pushMessageText();
    }

    let newMessageText = () => {
        let text = messageElement.current.value;
        props.selectNewMessageText(text);
    }

    return (
        <div className={classes.Dialog_wrapper}>
            <HeaderDialog/>
            <div>
                {dialogElements}
            </div>
            <div>
                {messageElements}
                <div>
                    <textarea onChange={newMessageText} className={classes.MessageText} ref={messageElement} value={props.addSayMessage}/>
                    <button onClick={pushMessageText} className={classes.MessagePushText}>Отправить</button>
                </div>

            </div>

        </div>

    )
}


export default Dialog;
//     [
//     ,
//     <DialogItems name={dialogData[1].name} id={dialogData[1].id}/>,
//     <DialogItems name={dialogData[2].name} id={dialogData[2].id}/>,
//     <DialogItems name={dialogData[3].name} id={dialogData[3].id}/>,
//     <DialogItems name={dialogData[4].name} id={dialogData[4].id}/>,
//     <DialogItems name={dialogData[5].name} id={dialogData[5].id}/>
// ]

/*let massegeData = [
    {id: 1, massege: 'Привет! Как Дела? Как твои уроки по Уроки React JS'},
    {id: 2, massege: 'Я рад и мне очень весело'},
    {id: 3, massege: 'Все круто!'}
]*/
/*let dialogData = [
     {id: 1, name: 'Андрей'},
     {id: 2, name: 'Cветлана'},
     {id: 3, name: 'Алексей'},
     {id: 4, name: 'Инна'},
     {id: 5, name: 'Василий'},
     {id: 6, name: 'Юля'},
     {id: 6, name: 'Юля'},
     {id: 6, name: 'Юля'},
 ]*/
/*[
  <MessageItems text={massegeData[0].massege} id={massegeData[0].id}/>,
  <MessageItems text={massegeData[1].massege} id={massegeData[1].id}/>,
  <MessageItems text={massegeData[2].massege} id={massegeData[2].id}/>
]*/