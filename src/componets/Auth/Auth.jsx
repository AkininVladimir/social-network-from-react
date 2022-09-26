import React from "react";
import classes from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import user_photo from "../Users/149071.png";

const AuthComponent = (props) => {

    return (
        <div className={classes.profile_menu}>

            {props.getInfo.isAuth ? <div>Владимир А.</div> : <div className={classes.header_menu_tab}>
                <NavLink to={'/login'} className={classes.icon}>Зарегистрируйся</NavLink>
            </div>}

          <div className={classes.header_menu_tab} onClick={props.logout}>Выйти</div>

            <div className={classes.small_profile_picture}>
                <img src={user_photo} alt="#"/>
            </div>

        </div>
    )

};

export default AuthComponent;




