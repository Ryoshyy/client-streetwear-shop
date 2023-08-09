import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './Reset/reset.scss'
import { Provider } from "react-redux";
import store from "./redux/store.js"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>

);
