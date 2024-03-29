import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'

// types
export type DialogsItemType = {
    name: string
    id: number
    img: string
}

// component
export const DialogItem = (props:DialogsItemType) => {
    let path = '/social-network/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.img} alt=''/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
        )
}



