import React from 'react';

import store from "./redux/redux-store";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";


 const root = ReactDOM.createRoot(

    document.getElementById('root')
);
 const element =
<React.StrictMode>
  <BrowserRouter>
    <Provider  store ={store}><App/></Provider>
  </BrowserRouter>
</React.StrictMode>;

root.render(element);

