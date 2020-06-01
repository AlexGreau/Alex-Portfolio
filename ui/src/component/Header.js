import React, { Component } from 'react';
import SocialSection from './Social';
import resume from '../assets/resume.pdf'
import { Link } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
        <a className="navbar-brand" href="#root">Alexandre Greau</a>
        <div className="collapse navbar-collapse align-self-center" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item " >
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flashcards">Flashcards App</Link>
            </li>
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
            {SocialSection()}
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;