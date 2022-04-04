import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export let rerenderAllTree = (State, addPost) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appState = {State} newPost = {addPost}/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}


reportWebVitals();
