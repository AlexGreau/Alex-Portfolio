import React, { Component } from "react";
import './components.css';

class Project extends Component {
    render() {
        const { title, img, desc, link } = this.props.project;

        return (
            <div className='card projectItem'>
                <img src={img} alt="project icon" className="card-img-top projectImage" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href={link}>{link}</a>
                </div>
            </div>
        );
    }
}

export default Project;