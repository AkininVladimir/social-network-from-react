import React from 'react';
import classes from './Header.module.css';
import AuthContainer from "../Auth/AuthContainer";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={classes.HeaderWrapper}>
            <ul className={classes.header_menu}>
                <li>
                    <NavLink to="/login" className={classes.header_menu_tab} href="#"><span
                        className={classes.icon}></span>Регистрация</NavLink>
                </li>
                <li>
                    <NavLink to="#" className={classes.header_menu_tab} href="#2"><span
                        className={classes.icon}></span>Профиль</NavLink>
                </li>
                <li>
                    <NavLink to="#" className={classes.header_menu_tab} href="#3"><span
                        className={classes.icon}></span>Сообщения</NavLink>
                    <NavLink to="#" className={classes.header_menu_number} href="#4">5</NavLink>
                </li>
                <li>
                    <NavLink to="#" className={classes.header_menu_tab} href="#5"><span
                        className={classes.icon}></span>Избранные</NavLink>
                </li>
            </ul>
                <AuthContainer/>
        </header>
    )

}
export default Header;
