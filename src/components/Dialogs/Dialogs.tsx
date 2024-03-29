import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";
import {Button} from "../common/Button/Button";

// types
type FormDataType = {
    newMessageBody: string
}

// component
export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img} /> )
    let messagesElements = props.messages.map( m => <Message key={m.id} messages={m.messages} id={m.id} />)


    let addNewMessage = (values: FormDataType) => {
        if (values.newMessageBody.trim() !== '') {
            props.sendMessage(values.newMessageBody.trim())
            values.newMessageBody = ''
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
                    <AddMessageReduxForm onSubmit={addNewMessage}  />
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm:  React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'} placeholder={'Enter your message'} style={{height: '43px', width: '200px', marginTop: '-6px'}} />
        </div>
        <div>
            <Button name={'Send'} />
        </div>
    </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)


