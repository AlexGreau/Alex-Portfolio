import React, { Component } from "react";
import './components.css';

class Project extends Component {
    render() {
        const { title, img, desc, link } = this.props.project;

        return (
            <div class='card projectItem'>
                <img src={img} alt="project icon" class="card-img-top projectImage" />
                <div class="card-body">
                    <h4 class="card-title">{title}</h4>
                    <p class="card-text">{desc}</p>
                    <a href={link}>{link}</a>
                </div>
            </div>
        );
    }
}

export default Project;