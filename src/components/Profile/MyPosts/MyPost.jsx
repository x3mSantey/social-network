import React from 'react';
import style from './MyPost.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';






const MyPosts = (props) => {

  let postsElements = props.profilePage.posts.map( (p) =>  <Post message={p.message} like={p.like}  dislike={p.dislike}/>)

  let newPostElement = React.createRef();
  

  let addPost = () => {
    
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewPostTextActionCreator(''))
  }

  let onPostChange = () => {

    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={style.myPosts}>
      <textarea placeholder="Write your text" ref={newPostElement} onChange={onPostChange} ></textarea>
      <button onClick={addPost} >Add post</button>
      {postsElements}
    </div>
  )
}

export default MyPosts;