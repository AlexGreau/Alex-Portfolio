import React, { Component } from "react";
import './components.css';

class Project extends Component {
    render() {
        const { title, img, desc, link } = this.props.project;

        return (
            <div className='projectItem'>
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href={link}>{link}</a>
                <img src={img} alt="project icon" className="projectImage" />
            </div>
        );
    }
}

export default Project;