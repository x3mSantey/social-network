import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/Profile';
import MyPostsConteiner from './MyPosts/MyPostConteiner';


const Profile = (props) => {
  return (
    <div className={style.content}>
      <div className={style.headImage}>
        <img src="https://get.wallhere.com/photo/city-cityscape-night-skyline-skyscraper-evening-panorama-Paris-triple-screen-metropolis-downtown-landmark-metropolitan-area-human-settlement-180170.jpg" />
      </div>
      <ProfileInfo />
      <MyPostsConteiner />
    </div>
  )
}

export default Profile;