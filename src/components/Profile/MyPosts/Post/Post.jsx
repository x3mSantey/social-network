import React from 'react';
import style from './Post.module.css'


const Post = (props) => {
  
  return (
    <div className={style.conteiner}>
      <img src="https://oboi.ws/filters/lomo_11_4511_oboi_chevrolet_camaro_1280x1024.jpg" />
      <p className="message">{props.message}</p>
      <div className='control_bar'>
        <p className="like">Like  {props.like}</p>
        <p className="dislike">Dislike  {props.dislike}</p>
      </div>

    </div>
  )
}

export default Post;