import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/Profile';


const Profile = (props) => {
  return (
    <div className={style.content}>
      <div className={style.headImage}>
        <img src="https://get.wallhere.com/photo/city-cityscape-night-skyline-skyscraper-evening-panorama-Paris-triple-screen-metropolis-downtown-landmark-metropolitan-area-human-settlement-180170.jpg" />
      </div>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;