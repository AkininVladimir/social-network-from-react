import React from 'react';
import {
    follow, getUsers,
    setTotalUsersCount,
    toggleIsFollowingProgress,
    unfollow,
} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import Users from "./Users"
import PreloaderComponent from "../Preloader/PreloaderComponent";


class UsersAPIContainer extends React.Component {
    onSetClick = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        /*this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.pageSize, pageNumber)

            .then(data => {

                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });*/
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                })*/
    }

    render() {

        return (
            <div>
                {this.props.isFetching ? <PreloaderComponent/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onSetClick={this.onSetClick}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </div>

        )
    }
}

let mapStateToProps = (state) => {

    return ({
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress

    })

}

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setTotalUsersCount, toggleIsFollowingProgress, getUsers})(UsersAPIContainer);
export default UsersContainer;