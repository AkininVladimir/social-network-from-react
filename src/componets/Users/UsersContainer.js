import React from 'react';
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/UsersReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followActionCreator(userid));
        },
        unfollow: (userid) => {
            dispatch(unfollowActionCreator(userid));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;