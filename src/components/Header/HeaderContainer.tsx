import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getLoginThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getLoginThunkCreator: () => void
    logoutThunkCreator: () => void
}

type HeaderAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType, AppRootStateType> {
    componentDidMount() {
        this.props.getLoginThunkCreator()
    }

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

export const HeaderContainer = connect(mapStateToProps, {getLoginThunkCreator, logoutThunkCreator})(HeaderAPIContainer)
