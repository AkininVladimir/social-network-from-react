import React from 'react';
import classes from './ProfileInfo.module.css';
import PreloaderComponent from "../../Preloader/PreloaderComponent";
import user_photo from "../../Users/149071.png";


let ProfileInfo = (props) => {

    if (props.userProfile == null) {
        return <PreloaderComponent/>
    }

    return (
        <div className={classes.ProfileBlock}>

            <img className={classes.ProfilePicture}
                 src={props.userProfile.photos.small == null ? user_photo : props.userProfile.photos.large}/>
            <h1 className={classes.UserName}>{props.userProfile.fullName}</h1>
            <div className={classes.ProfileDescription}>
                <p>{props.userProfile.aboutMe == null ? "Обо мне:" : "Обо мне:" + props.userProfile.aboutMe}</p>
            </div>

        </div>
    )
}

export default ProfileInfo;