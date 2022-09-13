import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {ProfileActionTypes, profileReducer} from "./profile-reducer";
import {DialogsActionTypes, dialogsReducer} from "./dialogs-reducer";
import {UsersActionTypes, usersReducer} from "./users-reducer";
import {AuthActionTypes, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {ActionTypes, appReducer} from "./app-reducer";
import {ChatActionTypes, chatReducer} from "./chat-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
));

type AppActionTypes = ProfileActionTypes | DialogsActionTypes | UsersActionTypes | AuthActionTypes | ActionTypes | ChatActionTypes
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionTypes>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionTypes>












