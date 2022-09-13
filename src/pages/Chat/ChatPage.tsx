import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    sendMessageThunkCreator,
    startMessagesListeningThunkCreator,
    stopMessagesListeningThunkCreator
} from "../../redux/chat-reducer";
import {AppRootStateType} from "../../redux/redux-store";

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return <div>
        <Chat />
    </div>
}

const Chat: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListeningThunkCreator())
        return () => {
            dispatch(stopMessagesListeningThunkCreator())
        }
    }, [])

    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}

const Messages: React.FC = () => {
    const messages = useSelector((state: AppRootStateType) => state.chat.messages)

    return <div style={{height: '400px', overflow: 'auto'}}>
        {messages.map((m, index) => <Message key={index} message={m} />)}
    </div>
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return <div>
        <img src={message.photo} style={{width: '30px'}} alt=''/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const dispatch = useDispatch()

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessageThunkCreator(message))
        setMessage('')
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
}

export default ChatPage