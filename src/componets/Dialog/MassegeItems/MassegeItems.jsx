import React, {useRef} from 'react';
import classes from './MassegeItems.module.css';

const MassegeItems = (props) => {
    let MassegeText = useRef();

    let MassegePush = () => {
        let text = MassegeText.current.value;
        alert(text);
    }

    return (
        <div className={classes.MassegeItemsWrapper}>
            <div className={classes.MassegeItems}>
                <p>{props.text}</p>
            </div>
            <div className={classes.MassegeText}>
                <textarea  name="" id="" cols="30" rows="10" ref={MassegeText}></textarea>
            </div>
            <button onClick={MassegePush} className={classes.MassegePushText}>Отправить</button>
        </div>

    );
}

export default MassegeItems;