import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {Navigate} from "react-router-dom";

let Profile = (props) => {
    if(props.isAuth === false){return <Navigate to={'/login'}/>}
  return (
        <div className={classes.ProfileWrapper}>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;