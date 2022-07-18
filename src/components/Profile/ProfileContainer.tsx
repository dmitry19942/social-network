import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Profile_PropsType} from "./ProfileInfo/ProfileInfo";

type MapStateToPropsType = {
    profile: null | Profile_PropsType
}

type ProfileAPIContainerPropsType = {
    setUserProfile: (profile: null) => void
    profile: null | Profile_PropsType
}

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType, AppRootStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)