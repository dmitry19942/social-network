import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";

import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import {ActionTypes, RootStateType} from "./redux/state";

export type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
    newPostText: string
    newMessageBody: string
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                dispatch={props.dispatch}
                                                                newMessageBody={props.state.dialogsPage.newMessageBody}
                                                                messages={props.state.dialogsPage.messages}/> }/>
                <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}
                                                                dispatch={props.dispatch}
                                                                newPostText={props.state.profilePage.newPostText}
                                                                /> }/>
                <Route path={'/news'} render={() => <News /> }/>
                <Route path={'/music'} render={() => <Music /> }/>
                <Route path={'/settings'} render={() => <Settings /> }/>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;


