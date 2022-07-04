import React from "react";

import {DialogItem, DialogsItemType} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Message, MessagesType} from "./Message/Message";
import {ActionTypes, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {store} from "../../redux/store";

export type DialogsType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessagesType>
    newMessageBody: string
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} /> )
    let messagesElements = props.messages.map( m => <Message key={m.id} messages={m.messages} id={m.id} />)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let onSendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = () => {
        if(newMessageElement.current) {
            let body = newMessageElement.current.value
            props.updateNewMessageBody(body)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea ref={newMessageElement} value={props.newMessageBody} onChange={onMessageChange} placeholder={'Enter your message'}></textarea></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

