import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";

import {Dialogs, DialogsPageType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsType, ProfilePageType} from './components/Profile/MyPosts/MyPosts';
import {Profile} from "./components/Profile/Profile";



export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 2, message: 'Blablabla', likesCount: 15},
            {id: 2, message: 'Valera is the best', likesCount: 9},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, messages: 'Hi'},
            {id: 2, messages: 'How is your it-kamasutra?'},
            {id: 3, messages: 'Yo'},
            {id: 4, messages: 'Yo'},
            {id: 5, messages: 'Yo'},
            {id: 6, messages: 'Yo'},
        ]
    }
}

export let addPost = (postText: string) => {
    let newPost: PostsType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}

const App = () => {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                messages={state.dialogsPage.messages}/> }/>
                <Route path={'/profile'} render={() => <Profile posts={state.profilePage.posts}
                                                                addPost={addPost }/> }/>
                <Route path={'/news'} render={() => <News /> }/>
                <Route path={'/music'} render={() => <Music /> }/>
                <Route path={'/settings'} render={() => <Settings /> }/>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;


