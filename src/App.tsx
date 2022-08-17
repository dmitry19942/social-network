import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {AppRootStateType, store} from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

type mapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type AppPropsType = mapStateToPropsType & MapDispatchToPropsType


class App extends React.Component<AppPropsType, AppRootStateType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path={'/dialogs'} render={() => <SuspendedDialogs/>}/>
                        <Route path={'/profile/:userId?'} render={() => <SuspendedProfile/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp


