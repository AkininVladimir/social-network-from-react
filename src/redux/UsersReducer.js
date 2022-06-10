const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
/*const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';*/


let initialState = {
    users: [],
    pageSize: 5, /*количество пользователей на странице, задаем жестко*/
    totalUsersCount:200, /*поскольку данные должны приходитьс сервера, оставляем по умолчанию 0*/
    currentPage: 1, /*текущая страница для выполнения булинового условия pagesArray.map*/
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
        /*case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }*/
        default:
            return state;
    }

}

export const followActionCreator = (userid) => ({type: FOLLOW, userid});
export const unfollowActionCreator = (userid) => ({type: UNFOLLOW, userid});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, newPage:currentPage});
/*export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount});*/

export default usersReducer;