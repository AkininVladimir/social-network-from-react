import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";

const Profile = (props) => {
    return (
        <div className={classes.PofileWrapper}>
            <ProfileInfo/>
            <MyPost post = {props.PostState}/>
        </div>
    );
}

export default Profile;