import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";

const Profile = (props) => {
    return (
        <div className={classes.ProfileWrapper}>
            <ProfileInfo/>
            <MyPost post = {props.PostState} newPost = {props.newPost}/>
        </div>
    );
}

export default Profile;