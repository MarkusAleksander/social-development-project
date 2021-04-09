import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import authReducer from "./store/reducers/auth";
import profileReducer from "./store/reducers/profile";
import postsReducer from "./store/reducers/posts";

// * Prepare redux store
const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

// * combine redux reducers
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
});

// * compose Enhancers
const composedEnhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancers);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
