import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


// import FlashcardsApp from './apps/app_flashcards/app_flashcards';
import { getName } from './Routes';

import Project from './component/Project';
import PROJECTS from './data/projects';
import Social from './component/Social';
import SOCIALS from './data/socials'
import Title from './component/Title';
import Joke from './component/Joke';

import resume from './assets/resume.pdf'
class App extends Component {
  state = {
    isFlashcardApp: false,
    isHome: true,
    displayBio: false,
    titleIndex: 0,
  }

  switchToApp_flashcard = () => {
    this.setState({
      isFlashcardApp: true,
      isHome: false
    })
  }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }

  goHome = () => {
    this.setState({
      isHome: true,
      isFlashcardApp: false
    })
  }

  header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
        <a className="navbar-brand" href="#root">Alexandre Greau</a>
        <div className="collapse navbar-collapse align-self-center" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item " >
              <a className="nav-link" href="#root">Home</a>
            </li>
            {/* <li className="nav-item" onClick={this.switchToApp_flashcard}>
              <a  className="nav-link">Flashcards App</a>
            </li> */}
            <li className="nav-item">
              <a href="#aboutMe" className="nav-link">About me</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>

            <li className="nav-item" >
              <a className="nav-link" href={resume}>My resume</a>
            </li>
          </ul>
          <div className="col-2 align-self-end">
            {this.socialSection()}
          </div>
        </div>
      </nav>
    )
  }

  jokeSection = () => {
    return <Joke />   
  }

  aboutMe = () => {
    const name = getName();
    return (
      <div className="home">
        <h1>Hello ! thanks for coming :)</h1>
        <p>My name is {name}</p>
        {
          this.state.displayBio ? (
            <div>
              <Title />
              <button onClick={this.toggleDisplayBio}>show less</button>
            </div>
          ) : <button onClick={this.toggleDisplayBio}>show more</button>
        }
        <hr/>
        {this.jokeSection()}
      </div>
    );
  }

  projectsSection = () => {
    return (
      <div id="projects">
        <h3>Projects</h3>
        <div className="row justify-content-center">
          <div className="card-deck">
            {
              PROJECTS.map(PROJECT => {
                return (
                  <Project key={PROJECT.id} project={PROJECT} />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }

  socialSection = () => {
    return (
      <div className="btn-group" role="group">
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
    return (
      <div className="App">
        {this.header()}
        <div id='body' data-spy="scroll" data-target="#header" data-offset="0">
          {this.aboutMe()}
          {this.projectsSection()}
        </div>
      </div>
    );
  }
}

export default App;
