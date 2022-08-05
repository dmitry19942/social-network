import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import s from '../common/FormControls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type mapDispatchToPropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void
}

type mapStateToPropsType = {
    isAuth: boolean
}

type PropsType = mapDispatchToPropsType & mapStateToPropsType

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
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
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator})(Login)