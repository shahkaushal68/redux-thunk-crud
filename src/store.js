import {configureStore } from '@reduxjs/toolkit';
//import { createRouterMiddleware } from '@lagunovsky/redux-react-router'
import thunk from 'redux-thunk'
//import { createBrowserHistory } from 'history'
//import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/reducers';

//export const history = createBrowserHistory();
//const routerMiddleware = createRouterMiddleware(history)

const middlewareList = [thunk];

const store = configureStore({
    reducer: rootReducer,
    //devTools: composeWithDevTools,
    middleware: [...middlewareList],
});

export default store