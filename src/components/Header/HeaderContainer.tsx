import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {userAPI} from "../../api/api";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null) => void
}

type HeaderAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType, AppRootStateType> {
    componentDidMount() {
        userAPI.getHeader()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer)
