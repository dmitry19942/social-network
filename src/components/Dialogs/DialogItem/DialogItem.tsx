import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'

export type DialogsType = {
    name: string
    id: number
}

export const DialogItem = (props:DialogsType) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}



