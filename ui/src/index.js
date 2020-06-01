import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import app_Flashcards from './apps/app_flashcards/app_flashcards'


ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' component={App}></Route>
      <Route path='/flashcards' component={app_Flashcards}></Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
