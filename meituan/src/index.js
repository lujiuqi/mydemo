import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter,BrowserRouter} from "react-router-dom"
// HashRouter   hash路由模式
// BrowserRouter   history路由模式

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
