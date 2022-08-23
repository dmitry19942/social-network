import React from "react";
import s from './../Dialogs.module.css'

// types
export type MessagesType = {
    id: number
    messages: string
}

// component
export const Message = (props:MessagesType) => {
    return <div className={s.message}>{props.messages}
    </div>
}


