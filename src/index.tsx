import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RootStateType} from "./redux/store";
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/redux-store";


let renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 newPostText={state.profilePage.newPostText}
                 newMessageBody={state.dialogsPage.newMessageBody}
                 />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
