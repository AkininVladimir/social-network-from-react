import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";


const Profile = (props) => {

    return (
        <div className={classes.ProfileWrapper}>
            <ProfileInfo userProfile={props.userProfile} />
            <ProfileStatus status={props.status} updateStatus={props.updateUserStatus}/>
            <MyPostContainer/>
        </div>
    )

}

export default Profile;