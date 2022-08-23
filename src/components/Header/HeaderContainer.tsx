import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

// types
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    logoutThunkCreator: () => void
}
type HeaderAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

// component
class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType, AppRootStateType> {

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       logoutThunkCreator={this.props.logoutThunkCreator}
        />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {logoutThunkCreator})(HeaderAPIContainer)
