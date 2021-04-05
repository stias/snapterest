import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from "react-redux";

import Application from './components/Application';
import { initializeStreamOfTweets } from "./utils/WebAPIUtils";
import store from './stores';

initializeStreamOfTweets();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Application />
        </Provider>
    </React.StrictMode>,
    document.getElementById('react-application')
)
