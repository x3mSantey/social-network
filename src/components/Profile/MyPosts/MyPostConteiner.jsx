import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';
import MyPosts from './MyPost';
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    postChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
      dispatch(updateNewPostTextActionCreator(''))
    }
  }
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;