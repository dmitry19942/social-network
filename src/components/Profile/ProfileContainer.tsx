import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    setUserProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    savePhotoThunkCreator, saveProfileThunkCreator
} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Profile_PropsType} from "./ProfileInfo/ProfileInfo";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

// types
type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: Profile_PropsType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfileThunkCreator: (userId: number | null) => void
    getStatusThunkCreator: (userId: number | null) => void
    updateStatusThunkCreator: (status: string) => void
    savePhotoThunkCreator: (file: File) => void
    saveProfileThunkCreator: (profile: Profile_PropsType) => Promise<any>
}
type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerPropsType

// component
export class ProfileAPIContainer extends React.Component<PropsType, AppRootStateType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.setUserProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<RouteComponentProps<PathParamsType>>, prevState: Readonly<AppRootStateType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
           <Profile profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatusThunkCreator}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhotoThunkCreator}
                    saveProfile={this.props.saveProfileThunkCreator}
           />
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
    connect(mapStateToProps, {setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhotoThunkCreator, saveProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)