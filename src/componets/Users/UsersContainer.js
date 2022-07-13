import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import Users from "./Users"
import PreloaderComponent from "../Preloader/PreloaderComponent";
import {usersAPI} from "../API/API";

class UsersAPIContainer extends React.Component {
    onSetClick = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)

            .then(data => {

                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    componentDidMount() {

        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                }
            )
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <PreloaderComponent/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onSetClick={this.onSetClick}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
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

}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPIContainer);
export default UsersContainer;