import React from 'react';
import {NavLink} from 'react-router-dom';
import style from'./Navbar.module.css';



const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="#" activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="#" activeClassName={style.active}>Music</NavLink>
            </div>
      </nav>
    )
}

export default Navbar;