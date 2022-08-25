import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

// types
export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutThunkCreator: () => void
}

// component
export function Header(props: HeaderPropsType) {
    return <header className={s.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/480px-Instagram-Icon.png" alt=''/>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div> {props.login} - <button onClick={props.logoutThunkCreator}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}