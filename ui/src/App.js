import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


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
      return <Home />
    }
  }

  header = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="header">
        <a class="navbar-brand ">Alexandre Greau</a>
        <div class="collapse navbar-collapse align-self-center" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item " onClick={this.goHome}>
              <a  class="nav-link">Home</a>
            </li>
            {/* <li class="nav-item" onClick={this.switchToApp_flashcard}>
              <a  class="nav-link">Flashcards App</a>
            </li> */}
            <li class="nav-item">
              <a href="#aboutMe" class="nav-link">About me</a>
            </li>
            <li class="nav-item">
              <a href="#projects" class="nav-link">Projects</a>
            </li>

            <li class="nav-item" >
              <a  class="nav-link">My resume</a>
            </li>
          </ul>
          <div class="col-2 align-self-end">
            {this.socialSection()}
          </div>
        </div>
      </nav>
    )
  }

  aboutMe = () => {

  }

  projects = () => {

  }

  socialSection = () => {
    return (
      <div class="btn-group" role="group">
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
        {this.header()}
        <div id='body' data-spy="scroll" data-target="#header" data-offset="0">
          {body}
        </div>
      </div>
    );
  }
}

export default App;
