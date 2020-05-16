import './App.css';

import React, { Component } from 'react';
import App_flashcards from './apps/app_flashcards/app_flashcards';
import Home from './apps/app_home/home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFlashcardApp: false,
      isHome: true,
    }
    this.switchToApp_flashcard = this.switchToApp_flashcard.bind(this);
  }

  switchToApp_flashcard() {
    this.setState({
      isFlashcardApp: true,
      isHome: false
    })
  }

  getBody() {
    if (this.state.isFlashcardApp) {
      return <App_flashcards />
    } else {
      return <Home/>
    }
  }

  render() {
    const body = this.getBody();
    return (
      <div className="App">
        <header className="App-header">
          <h1>hellu from app</h1>
          <button onClick={this.switchToApp_flashcard}>switch to Flashcards App</button>
        </header>
        <div id='body'>
          {body}
        </div>
      </div>
    );
  }
}

export default App;
