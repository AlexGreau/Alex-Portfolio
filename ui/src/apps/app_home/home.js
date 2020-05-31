import React from 'react';
import './home.css';
import { getName } from '../../Routes.js';
import Project from '../../component/Project';
import PROJECTS from '../../data/projects';

class Home extends React.Component {
  state = { toggleBio: false };

  projectsSection = () => {
    return (
      <div>
        {
          PROJECTS.map(PROJECT => {
            return (
              <Project key={PROJECT.id} project={PROJECT} />
            )
          })
        }
      </div>
    );
  }

  render() {
    const name = getName();
    // const projectsSection = this.projectsSection();
    return (
      <div className="home">
        <h1>Hello ! thanks for coming :)</h1>
        <p>My name is {name}, I am  a software engineer and i live in Sohpia-Antipolis</p>
        <div>
          {this.projectsSection()}
        </div>
      </div>
    );
  }
}

export default Home;