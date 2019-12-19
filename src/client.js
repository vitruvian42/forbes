import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import 'normalize.css'
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router, Route} from "react-router-dom";

import App from "./components/App"

import store from "./store"


store.subscribe(()=>{
  localStorage.setItem('forbesReduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(<Provider store={store}>
  <div>
    <Router>
      <App />
    </Router> 
  </div>
</Provider>, document.getElementById('app'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
