import React, { Component } from "react";

class Project extends Component {
    render() {
        const { title, img, desc, link } = this.props.project;

        return (
            <div style={{
                display: 'inline-block',
                width: 300,
                margin: 10
            }}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href={link}>{link}</a>
                <img src={img} alt="project icon" className="projectImage" />
            </div>
        );
    }
}

export default Project;