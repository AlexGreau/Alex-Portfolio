import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import FlashcardsApp from './projects/flashcards-app/flashcardsApp';
import Hello from './component/Hello';
import MusicMaster from './projects/music-master/index'
import Header from './component/Header';
import BurgerBuilder from './projects/burger-builder/index';


ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render={()=> <Header><App/></Header>}></Route>
      <Route path='/flashcards' render={()=> <Header><FlashcardsApp/></Header>}></Route>
      <Route path='/helloworld' render={() => <Header><Hello/></Header>}></Route>
      <Route path='/music-master' render= {() => <Header><MusicMaster/></Header>}></Route>
      <Route path='/burger-builder' render= {() => <Header><BurgerBuilder /></Header>}></Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
