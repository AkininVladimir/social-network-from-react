const ADD_POST = 'ADD-POST';
const SELECT_UPDATE_POST = 'SELECT-UPDATE-POST';

const ProfileReducer = (state, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 4,
                name: 'no-name',
                message: state.newPostChange,
                likeCounter: '0',
                dislikeCounter: '0',
                postDate: 'Май 12, 2022'
            };
            state.post.push(newPost);
            state.newPostChange = '';
            return state;
        case 'SELECT-UPDATE-POST':
            state.newPostChange = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const selectUpdatePostActionCreator = (text) => ({type: SELECT_UPDATE_POST, newText: text});
export default ProfileReducer;