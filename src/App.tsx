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
import {ActionTypes} from "./redux/profile-reducer";
import {RootStateType, store} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer store={store}/> }/>
                <Route path={'/profile'} render={() => <Profile store={store}/>  }/>
                <Route path={'/news'} render={() => <News /> }/>
                <Route path={'/music'} render={() => <Music /> }/>
                <Route path={'/settings'} render={() => <Settings /> }/>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;


