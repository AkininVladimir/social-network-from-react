import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


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
            <div className={classes.profile_menu}>
                {props.isAuth ? props.login : <div className={classes.header_menu_tab}>
                    <NavLink to={'/login'} className={classes.icon}>Login</NavLink>
                </div> }

                <div className={classes.small_profile_picture}>
                    <img alt="ava"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2117LyfY1lh1QN1cXxJar1CdroglBWIWyww&usqp=CAU"/>
                </div>
            </div>
        </header>
    )

}
export default Header;