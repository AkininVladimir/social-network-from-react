import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


let Profile = (props) => {

  return (
        <div className={classes.ProfileWrapper}>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;