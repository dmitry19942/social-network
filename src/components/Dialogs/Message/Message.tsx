import React from "react";
import s from './../Dialogs.module.css'


export type MessagesType = {
    id: number
    messages: string
}

export const Message = (props:MessagesType) => {

    return <div className={s.message}>{props.messages}
    </div>
}


