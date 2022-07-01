import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RootStateType} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/state";


let renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 newPostText={store._state.profilePage.newPostText}
                 newMessageBody={store._state.dialogsPage.newMessageBody}
                 />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
