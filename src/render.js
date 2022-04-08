import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMassegeText, addPost, newMassegeText, updateNewPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderAllTree = (State) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appState={State} newPost={addPost} updateNewPost={updateNewPost} addMassegeText={addMassegeText} newMassegeText={newMassegeText}/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}


reportWebVitals();
