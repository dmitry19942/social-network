import React, {ComponentType} from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={'/social-network/login'}/>
        return <Component {...restProps as T} />
    }

    return connect(mapStateToProps)(RedirectComponent)
}