import React from 'react';
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    toggleIsFetchingActionCreator,
    unfollowActionCreator
} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import Users from "./Users"
import axios from "axios";
import PreloaderComponent from "../Preloader/PreloaderComponent";


class UsersAPIContainer extends React.Component {

    onSetClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    componentDidMount() {

        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(true);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <PreloaderComponent /> : null};
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       currentPage={this.props.currentPage}
                       onSetClick={this.onSetClick}
                />
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching

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
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer;