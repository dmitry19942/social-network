import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export function Header(props: HeaderPropsType) {
    return <header className={s.header}>
        <img
            src="data:image/jpeg;base64,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" alt=''/>
        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}