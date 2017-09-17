import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import Login from './components/Login/login';
import Teste from './components/teste/teste';
import SideBar from './components/Sidebar/Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <BrowserRouter>
      <div>
          <Switch>
            <Route path="/login" name="Página de Login" component={Login} />
            <Route path="/teste" name="Teste" component={Teste} />
            <Route path="/sidebar" name="Teste" component={SideBar} />
            <Route path="/" name="Dashboard" component={App} />
          </Switch>
      </div>
  </BrowserRouter>
  , document.querySelector('.container'));