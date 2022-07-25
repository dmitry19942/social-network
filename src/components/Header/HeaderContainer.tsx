import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getLoginThunkCreator} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getLoginThunkCreator: () => void
}

type HeaderAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType, AppRootStateType> {
    componentDidMount() {
        this.props.getLoginThunkCreator()
        // userAPI.getLogin()
        //     .then(data => {
        //         if(data.resultCode === 0) {
        //             let {id, email, login} = data.data
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     })
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                        login={this.props.login}
        />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {getLoginThunkCreator})(HeaderAPIContainer)
