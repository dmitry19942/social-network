import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Profile_PropsType} from "./ProfileInfo/ProfileInfo";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: Profile_PropsType
    status: string
    authorizedUserId: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getProfileThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
}


type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerPropsType

export class ProfileAPIContainer extends React.Component<PropsType, AppRootStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
           <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator} />
        )
    }
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileAPIContainer)