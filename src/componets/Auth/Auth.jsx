import React from "react";
import classes from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import user_photo from "../Users/149071.png";

const AuthComponent = (props) => {
    return (
        <div className={classes.profile_menu}>

            {props.getInfo.isAuth ? <h2>Владимир А.</h2> : <div className={classes.header_menu_tab}>
                <NavLink to={'/login'} className={classes.icon}>Зарегистрируйся</NavLink>
            </div>}

            <div className={classes.small_profile_picture}>
                <img src={props.getInfo.isAuth ? user_photo : null} alt="#"/>
            </div>

        </div>
    )

};

export default AuthComponent;




