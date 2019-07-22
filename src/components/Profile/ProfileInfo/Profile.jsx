import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.conteiner}>
      <div className={s.avatar}></div>
      <div className={s.info}></div>
    </div>
  )
}

export default ProfileInfo;