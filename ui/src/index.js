import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import FlashcardsApp from './projects/flashcards-app/flashcardsApp';
import Hello from './component/Hello';
import MusicMaster from './projects/music-master/index'
import Header from './component/Header';
import BurgerBuilder from './projects/burger-builder/index';

// history={createBrowserHistory()}
ReactDOM.render(
  <Router >
    <Switch>
      <Route exact path='/'> <Header><App /></Header></Route>
      <Route path='/flashcards' exact> <Header><FlashcardsApp /></Header> </Route>
      <Route path='/helloworld' exact><Header><Hello /></Header> </Route>
      <Route path='/music-master' exact><Header><MusicMaster /></Header></Route>
      <Route path='/burger-builder'component={BurgerBuilder}></Route>
      <Route render={() => <h2>not found, sorry </h2>}></Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
