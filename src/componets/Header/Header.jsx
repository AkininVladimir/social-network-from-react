import React from 'react';
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.MainLogo}>
                <img src="https://cdn.pixabay.com/photo/2020/06/09/17/36/donut-5279363_960_720.png"></img>
            </div>
        </header>
    )

}
export default Header;