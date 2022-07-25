import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {Profile_PropsType} from "./ProfileInfo/ProfileInfo";



type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: Profile_PropsType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getProfileThunkCreator: (userId: string) => void
}


type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerPropsType

export class ProfileAPIContainer extends React.Component<PropsType, AppRootStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '19481'
        }
        this.props.getProfileThunkCreator(userId)
        // userAPI.getProfile(userId)
        //     .then(data => {
        //         this.props.setUserProfile(data)
        //     })
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'} />
        return (
           <Profile profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})



const WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent)