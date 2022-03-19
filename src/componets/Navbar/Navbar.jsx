import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <div className={classes.item}>
                <NavLink to="/Profile" className={(navData) => navData.isActive ? classes.active: classes.item} >Профиль</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Dialog'className={(navData) => navData.isActive ? classes.active: classes.item}>Диалоги</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Services"className={(navData) => navData.isActive ? classes.active: classes.item}>Сервисы</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music"className={(navData) => navData.isActive ? classes.active: classes.item}>Моя музыка</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings"className={(navData) => navData.isActive ? classes.active: classes.item}>Настройки</NavLink>
            </div>
        </nav>

    )
}
export default Navbar;
