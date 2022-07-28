import {
    DialogsItemType,
    MessagesType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


// export const DialogsContainer = () => {
//
//     let state = store.getState().dialogsPage
//
//     let onSendMessage = () => {
//             store.dispatch(sendMessageCreator())
//
//     }
//
//     let onMessageChange = (body: string) => {
//             let action = updateNewMessageBodyCreator(body)
//             store.dispatch(action)
//         }
//
//     return <Dialogs updateNewMessageBody={onMessageChange}
//                     sendMessage={onSendMessage}
//                     newMessageBody={state.newMessageBody}
//                     dialogs={state.dialogs}
//                     messages={state.messages}
//     />
// }

type MapStateToPropsType = {
    newMessageBody: string
    dialogs: DialogsItemType[]
    messages: MessagesType[]
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs)

