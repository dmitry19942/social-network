import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={s.button} onClick={props.onClick} disabled={props.disabled}>
            {props.name}
        </button>
    )
}