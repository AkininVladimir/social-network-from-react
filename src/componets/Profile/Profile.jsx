import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './Profile.module.css';
const Profile = () => {
    return (
        <div>
            <div>ava + description</div>
            <MyPost/>
        </div>

    );
}

export default Profile;