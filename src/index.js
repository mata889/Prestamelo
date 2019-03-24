import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));
/*initializeFirebase();*/
serviceWorker.register();

 /*if (window.location.protocol !== "https:") {
     window.location =
       "https://" + window.location.hostname + window.location.pathname + window.location.hash;
 }*/
