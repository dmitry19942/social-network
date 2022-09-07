import React from 'react';
import './App.css';
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AppRootStateType, store} from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {UsersPage} from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";
import 'antd/dist/antd.css';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu} from 'antd';
import { Header } from './components/Header/Header';


const {SubMenu} = Menu
const {Content, Footer, Sider} = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)

type mapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type AppPropsType = mapStateToPropsType & MapDispatchToPropsType


class App extends React.Component<AppPropsType, AppRootStateType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillMount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Layout>
                <Header/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                // defaultSelectedKeys={['1']}
                                // defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="1"> <Link to="/profile">Profile</Link></Menu.Item>
                                    <Menu.Item key="2"> <Link to="/dialogs">Messages</Link></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="5"><Link to="/users">Developers</Link></Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Chat">
                                    <Menu.Item key="9"><Link to="/chat">Chat</Link></Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                                </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                                <Route path={'/profile/:userId?'} render={() => <SuspendedProfile/>}/>
                                <Route path={'/dialogs'} render={() => <SuspendedDialogs/>}/>
                                <Route path={'/users'} render={() => <UsersPage/>}/>
                                <Route path={'/login'} render={() => <Login/>}/>
                                <Route path={'/news'} render={() => <News/>}/>
                                <Route path={'/music'} render={() => <Music/>}/>
                                <Route path={'/settings'} render={() => <Settings/>}/>
                                <Route path={'/chat'} render={() => <SuspendedChatPage/>}/>
                                <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Social Network ©2022 Created by dmitriy19942</Footer>
            </Layout>
            // <BrowserRouter>
            //     <div className={'app-wrapper'}>
            //         <HeaderContainer/>
            //         <Navbar/>
            //         <div className={'app-wrapper-content'}>
            //             <Switch>
            //                 <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
            //                 <Route path={'/profile/:userId?'} render={() => <SuspendedProfile/>}/>
            //                 <Route path={'/dialogs'} render={() => <SuspendedDialogs/>}/>
            //                 <Route path={'/users'} render={() => <UsersPage/>}/>
            //                 <Route path={'/login'} render={() => <Login/>}/>
            //                 <Route path={'/news'} render={() => <News/>}/>
            //                 <Route path={'/music'} render={() => <Music/>}/>
            //                 <Route path={'/settings'} render={() => <Settings/>}/>
            //                 <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
            //             </Switch>
            //         </div>
            //     </div>
            // </BrowserRouter>
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


