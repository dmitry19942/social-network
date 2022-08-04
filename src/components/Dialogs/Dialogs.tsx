import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLenghtCreator, required} from "../../utils/validators";

type FormDataType = {
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} /> )
    let messagesElements = props.messages.map( m => <Message key={m.id} messages={m.messages} id={m.id} />)


    let addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}  />
                </div>
            </div>
        </div>
    )
}

const maxLenght50 = maxLenghtCreator(50)

const AddMessageForm:  React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLenght50]} name={'newMessageBody'} placeholder={'Enter your message'}/>
        </div>
        <div><button>Send</button></div>
    </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)


