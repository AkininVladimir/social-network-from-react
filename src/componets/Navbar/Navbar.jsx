import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="#">Профиль</a>
            </div>
            <div className={classes.item}>
                <a href="#">Диалоги</a>
            </div>
            <div className={classes.item}>
                <a href="#">Сервисы</a>
            </div>
            <div className={classes.item}>
                <a href="#">Моя музыка</a>
            </div>
            <div className={classes.item}>
                <a href="#">Настройки</a>
            </div>
        </nav>

    );
}
export default Navbar;
