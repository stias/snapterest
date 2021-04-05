import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import { initializeStreamOfTweets } from "./utils/WebAPIUtils";

initializeStreamOfTweets();

ReactDOM.render(
    <React.StrictMode>
        <Application />,
    </React.StrictMode>,
    document.getElementById('react-application')
)
