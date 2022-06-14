const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [], pageSize: 50, /*количество пользователей на странице, задаем жестко*/
    totalUsersCount: 0, /*поскольку данные должны приходитьс сервера, оставляем по умолчанию 0*/
    currentPage: 1, /*текущая страница для выполнения булинового условия pagesArray.map*/
    isFetching: false /*создаем булиновое условие прикоторм будет выполняться появление картинки preloader*/
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, follow: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, follow: true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users] /*меняем получение пользоватлей из конца action */
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.newPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }

}

export const followActionCreator = (userid) => ({type: FOLLOW, userid});
export const unfollowActionCreator = (userid) => ({type: UNFOLLOW, userid});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, newPage: currentPage});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;