import {usersAPI as userAPI, usersAPI} from "../componets/API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  page: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case(FOLLOW):
      return {
        ...state, users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, follow: true}
          } else return u;
        })
      }
    case (UNFOLLOW):
      return {
        ...state, users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, unfollow: true}
          } else return u;
        })
      }
    case (SET_USERS):
      return {
        ...state, users: [...action.users] /*меняем получение пользоватлей из конца action */
      }
    case (SET_CURRENT_PAGE):
      return {
        ...state, page: action.newPage
      }
    case(SET_TOTAL_COUNT):
      return {
        ...state, totalUsersCount: action.count
      }
    case (TOGGLE_IS_FETCHING):
      return {
        ...state, isFetching: action.isFetching
      }
    case (TOGGLE_IS_FOLLOWING_PROGRESS):

      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;


  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, newPage: page});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

/*урок redux-thunk */ /*thunk - Это функция которая принимает метод dispatch и dispach  внутри себя action's*/

export const requestUsers = (page, pageSize) => {

  return (dispatch) => {
    dispatch(toggleIsFetching(true))

    usersAPI.giveUsers(page, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      })
  }

}
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    userAPI.follow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
      })
  }

}
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))

    userAPI.unfollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
}
/*урок redux-thunk */

export default usersReducer;
