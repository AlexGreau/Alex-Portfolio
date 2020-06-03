import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import FlashcardsApp from './projects/flashcards-app/flashcardsApp';
import Hello from './component/Hello';
import Header from './component/Header';


ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render={()=> <Header><App/></Header>}></Route>
      <Route path='/flashcards' render={()=> <Header ><FlashcardsApp/></Header>}></Route>
      <Route path='/helloworld' render={() => <Header><Hello/></Header>}></Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
