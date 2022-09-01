import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {useDispatch, useSelector} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import s from '../common/FormControls/FormControls.module.css'

// types
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormOwnProps = {
    captchaUrl: string | null
}

// component
export const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"/> remember me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl} alt=''/>}
            {props.captchaUrl && <Field placeholder={'Symbols from image'} name={'captcha'} component={Input} validate={required}  />}

            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)

export const Login = () => {
    const captchaUrl = useSelector((state: AppRootStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppRootStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
}
