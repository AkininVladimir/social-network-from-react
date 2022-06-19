import React from 'react';
import classes from './ProfileInfo.module.css';
import PreloaderComponent from "../../Preloader/PreloaderComponent";


let ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <PreloaderComponent/>
    }

    return (
        <div className={classes.ProfileBlock}>

                <img className={classes.ProfilePicture} src={props.userProfile.photos.large}/>
                <h1 className={classes.UserName}>{props.userProfile.fullName}</h1>
                <div className={classes.ProfileDescription}>
                    <p>{props.userProfile.aboutMe}</p>
                </div>

                <img className={classes.ProfilePicture} alt="picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvdY18l2WSnl9JsRSQPn7dV7eCKxyIX72mQ&usqp=CAU"/>
                <h1 className={classes.UserName}>Просто Девушка</h1>
                <div className={classes.ProfileDescription}>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing</p>
                </div>
                <div className={classes.ProfileOptions}>
                    <div className={classes.Comments}><a href="#40"><p><span
                        className={`${classes.IconComments}' '${classes.ScndFontColor}`}></span>23</p></a>
                    </div>
                    <div className={classes.Views}><a href="#41"><p><span
                        className={`${classes.IconViews}${classes.ScndFontColor}`}></span>841</p></a>
                    </div>
                    <div className={classes.Likes}><a href="#42"><p><span
                        className={`${classes.IconLikes}' '${classes.ScndFontColor}`}></span>49</p></a>
                    </div>

                </div>

        </div>)
}

export default ProfileInfo;