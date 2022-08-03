import React from 'react';

import {connect} from 'react-redux';
import {addPost, getUsersProfile, selectUpdatePost} from '../../redux/ProfileReducer';
import Profile from './Profile';
import {useMatch} from "react-router";
import {withAuthRedirect} from "../HOC/withAuthRedirect";


class ProfileAPIComponent extends React.Component {

    componentDidMount() {

        let userId = this.props.match ? this.props.match.params.userId : this.props.currentUserID;
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileAPIComponent)

let mapStateToProps = (state) => {
    return {
        userProfile: state.ProfilePage.userProfile,
        currentUserID: state.Auth.id,
    }
}

let ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId")

    return (
        <AuthRedirectComponent {...props} match={match}/>
    )
}

const ProfileContainer = connect(mapStateToProps, {getUsersProfile, selectUpdatePost, addPost})(ProfileMatch);

export default ProfileContainer;