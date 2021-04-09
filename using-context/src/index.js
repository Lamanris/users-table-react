import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.css'
import {MainContextProvider} from "./context/main-context";

ReactDOM.render(
    <MainContextProvider>
            <App />
    </MainContextProvider>,
    document.getElementById('root')
)

