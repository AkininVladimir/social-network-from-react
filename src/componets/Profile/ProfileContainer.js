import React from 'react';

import {connect} from 'react-redux';
import {
    addPost,
    getUsersProfile,
    getUserStatus,
    selectUpdatePost,
    updateUserStatus
} from '../../redux/ProfileReducer';
import Profile from './Profile';
import {withAuthRedirect, withRouter} from "../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileAPIComponent extends React.Component {

    componentDidMount() {

        let userId = this.props.match ? this.props.match.params.userId : this.props.currentUserID;
        this.props.getUsersProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        userProfile: state.ProfilePage.userProfile,
        currentUserID: state.Auth.id,
        status: state.ProfilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getUsersProfile, selectUpdatePost, addPost, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect)(ProfileAPIComponent);


