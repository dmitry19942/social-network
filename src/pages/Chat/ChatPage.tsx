import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    ChatMessageAPIType,
    sendMessageThunkCreator,
    startMessagesListeningThunkCreator,
    stopMessagesListeningThunkCreator
} from "../../redux/chat-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Button} from "../../components/common/Button/Button";

export const ChatPage: React.FC = () => {
    return <div>
        <Chat />
    </div>
}

const Chat: React.FC = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: AppRootStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListeningThunkCreator())
        return () => {
            dispatch(stopMessagesListeningThunkCreator())
        }
    }, [])

    return <div>
        { status === 'error' && <div>Some error occurred. Please refresh the page</div> }
            <>
                <Messages/>
                <AddMessageForm/>
            </>
    </div>
}

const Messages: React.FC = () => {
    const messages = useSelector((state: AppRootStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({block: 'end', behavior: 'smooth'})
        }
    }, [messages])

    return <div style={{height: '400px', overflow: 'auto'}}>
        {messages.map((m, index) => <Message key={m.id} message={m} />)}
        <div ref={messagesAnchorRef}></div>
    </div>
}

const Message: React.FC<{message: ChatMessageAPIType}> = React.memo( ({message}) => {
    return <div>
        <img src={message.photo} style={{width: '30px'}} alt=''/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
})

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const status = useSelector((state: AppRootStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if (!message) {
            return alert('empty message cannot be sent')
        }
        dispatch(sendMessageThunkCreator(message))
        setMessage('')
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <Button name={'Send'} onClick={sendMessageHandler} disabled={status !== 'ready'} />
        </div>
    </div>
}

export default ChatPage