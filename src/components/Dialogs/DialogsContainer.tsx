import {
    DialogsItemType,
    MessagesType,
    sendMessage
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogs: DialogsItemType[]
    messages: MessagesType[]
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessage(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

