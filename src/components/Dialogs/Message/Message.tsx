import React from "react";
import s from './../Dialogs.module.css'


export type MessagesType = {
    messages: string
}

export const Message = (props:MessagesType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        if(newMessageElement.current){
            let textMessage = newMessageElement.current.value
            alert(textMessage)
        }
    }
    return <div className={s.message}>{props.messages}
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>addMessage</button>
    </div>
}


