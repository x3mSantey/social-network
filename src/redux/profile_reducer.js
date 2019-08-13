const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
        posts: [
            { message: 'hi, how are you?', like: 14, dislike: 7 },
            { message: 'Its my posts', like: 9, dislike: 2 },
            { message: 'Iam good!', like: 20, dislike: 5 },
            { message: 'New post :)', like: 12, dislike: 0 }
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
                dislike: 0
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;