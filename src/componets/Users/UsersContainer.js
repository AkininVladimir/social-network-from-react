import React from 'react';
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unfollowActionCreator} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import Users from "./Users"


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage

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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        /*setTotalUsersCount: (pageCount) => {
            dispatch(setTotalUsersCountActionCreator(pageCount));
        },*/
    }}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;