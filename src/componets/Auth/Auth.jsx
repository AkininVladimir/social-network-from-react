import React from "react";
import classes from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";


const AuthComponent = (props)=> {

return (

    <div className={classes.profile_menu}>

        {props.getInfo.isAuth ? <div>Я{props.getInfo.login}</div>: <div className={classes.header_menu_tab}>
            <NavLink to={'/login'} className={classes.icon}>Зарегистрируйся</NavLink>
        </div>}

        <div className={classes.small_profile_picture}>
            <img alt="ava"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2117LyfY1lh1QN1cXxJar1CdroglBWIWyww&usqp=CAU"/>
        </div>
    </div>
    )

}

export default AuthComponent;
