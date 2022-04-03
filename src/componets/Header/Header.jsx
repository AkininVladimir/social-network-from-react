import React from 'react';
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.HeaderWrapper}>
            <div className={classes.MainLogo}>
                <div className={classes.Logo}>
                    <img src="https://cdn.pixabay.com/photo/2020/06/09/17/36/donut-5279363_960_720.png"></img>
                </div>
            </div>
                <div className={classes.SeachHeder}>
                    <input type="text" className={classes.TopSearchInput} id="ts_input"
                           aria-label="Поиск"/>
                </div>
                <div className={classes.HeaderInfo}>
                    <a className={classes.HeaderInfoItem} ></a>
                    <a className={classes.HeaderInfoItem} ></a>
                    <a className={classes.HeaderInfoItem} ></a>
                </div>
                <div className={classes.HederServices}>
                    <span>Сервисы</span>
                    <span>Управление ID</span>
                </div>


        </header>
    )

}
export default Header;