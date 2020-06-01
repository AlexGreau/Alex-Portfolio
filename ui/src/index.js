import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import app_Flashcards from './apps/app_flashcards/app_flashcards'
import Header from './component/Header';


ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render={()=> <Header><App/></Header>}></Route>
      <Route path='/flashcards' render={()=> <Header ><app_Flashcards/></Header>}></Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
