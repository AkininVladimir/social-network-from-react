import React from 'react';
import {
  follow, requestUsers,
  setTotalUsersCount,
  toggleIsFollowingProgress,
  unfollow,
} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import Users from "./Users"
import PreloaderComponent from "../Preloader/PreloaderComponent";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersAPIContainer extends React.Component {
    onSetClick = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize)


    }

    componentDidMount() {
        this.props.requestUsers(this.props.page, this.props.pageSize);

    }

    render() {

        return (
            <div>
                {this.props.isFetching ? <PreloaderComponent/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    page={this.props.page}
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

/*let mapStateToProps = (state) => {

  return ({
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    followingInProgress: state.UsersPage.followingInProgress

  })

}*/

let mapStateToProps = (state) => {

    return ({
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    })

}

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setTotalUsersCount, toggleIsFollowingProgress, requestUsers})(UsersAPIContainer);
export default UsersContainer;
