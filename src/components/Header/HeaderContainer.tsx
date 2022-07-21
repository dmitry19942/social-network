import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true,
            headers: {'API-KEY': 'a1c29d8b-1c83-4c49-8a4c-55a3c1e75564'}})
            .then(res => {
                if(res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
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
