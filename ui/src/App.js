import './App.css';

import React, { Component } from 'react';
import FlashcardsApp from './apps/app_flashcards/app_flashcards';
import Home from './apps/app_home/home';

import Social from './component/Social';
import SOCIALS from './data/socials'

class App extends Component {
  state = {
    isFlashcardApp: false,
    isHome: true,
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isFlashcardApp: false,
  //     isHome: true,
  //   }
  //   this.switchToApp_flashcard = this.switchToApp_flashcard.bind(this);
  // }

  switchToApp_flashcard = () => {
    this.setState({
      isFlashcardApp: true,
      isHome: false
    })
  }

  goHome = () => {
    this.setState({
      isHome: true,
      isFlashcardApp: false
    })
  }

  getBody = () => {
    if (this.state.isFlashcardApp) {
      return <FlashcardsApp />
    } else {
      return <Home/>
    }
  }

  socialSection = () => {
    return (
      <div>
        {
         SOCIALS.map(SOCIAL => {
            return (
              <Social key={SOCIAL.id} social={SOCIAL} />
            )
          })
        }
      </div>
    )
  }

  render() {
    const body = this.getBody();
    return (
      <div className="App">
        <header className="App-header">
          <h1>hellu from app</h1>
          <button onClick={this.switchToApp_flashcard}>Flashcards App</button>
          <button onClick={this.goHome}>Home</button>
          <div>
          {this.socialSection()}
        </div>
        </header>
        <div id='body'>
          {body}
        </div>
      </div>
    );
  }
}

export default App;
