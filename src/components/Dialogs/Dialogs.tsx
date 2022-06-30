import React from "react";

import {DialogItem, DialogsType} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Message, MessagesType} from "./Message/Message";

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: DialogsPageType) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )
    let messagesElements = props.messages.map( m => <Message messages={m.messages} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

