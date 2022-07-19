import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Profile_PropsType} from "./ProfileInfo/ProfileInfo";
import {Dispatch} from "redux";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: Profile_PropsType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: Profile_PropsType) => void
}


type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerPropsType

export class ProfileAPIContainer extends React.Component<PropsType, AppRootStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '19481'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
           <Profile profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        setUserProfile: (profile: Profile_PropsType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)