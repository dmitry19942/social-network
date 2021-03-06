import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'

export type DialogsItemType = {
    name: string
    id: number
}

export const DialogItem = (props:DialogsItemType) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}



