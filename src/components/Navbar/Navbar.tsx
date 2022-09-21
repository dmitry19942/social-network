import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'


export function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/social-network/profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/social-network'} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/social-network/users'} activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/social-network/news'} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/social-network/music'} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/social-network/settings'} activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    )
}