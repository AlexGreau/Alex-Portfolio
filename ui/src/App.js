import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


// import FlashcardsApp from './apps/app_flashcards/app_flashcards';
import ProjectSection from './component/Project';
import JokeSection from './component/Joke';
import Header from './component/Header';
import Bio from './component/Bio';

class App extends Component {
   

  render() {
    return (
      <div className="App">
        <Header />
        <div id='body' data-spy="scroll" data-target="#header" data-offset="0">
          <Bio/>
          <ProjectSection />
          <JokeSection />
        </div>
      </div>
    );
  }
}

export default App;
