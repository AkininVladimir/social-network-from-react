import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";
import Post from "./MyPost/Post/Post";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts}/>
        </div>
    );
}

export default Profile;