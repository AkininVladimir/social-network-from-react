import React from 'react';
import classes from './Header.module.css';
import AuthContainer from "../Auth/AuthContainer";

const Header = (props) => {

    return (
        <header className={classes.HeaderWrapper}>
            <ul className={classes.header_menu}>
                <li>
                    <a className={classes.header_menu_tab} href="#"><span
                        className={classes.icon}></span>Регистрация</a>
                </li>
                <li>
                    <a className={classes.header_menu_tab} href="#2"><span
                        className={classes.icon}></span>Профиль</a>
                </li>
                <li>
                    <a className={classes.header_menu_tab} href="#3"><span
                        className={classes.icon}></span>Сообщения</a>
                    <a className={classes.header_menu_number} href="#4">5</a>
                </li>
                <li>
                    <a className={classes.header_menu_tab} href="#5"><span
                        className={classes.icon}></span>Избранные</a>
                </li>
            </ul>
                <AuthContainer/>
        </header>
    )

}
export default Header;