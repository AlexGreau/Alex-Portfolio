import React from "react";
import './components.css';
import PROJECTS from '../data/projects';
import { Link } from 'react-router-dom';

const Project = props => {
    const { title, img, desc, link } = props.project;

    return (
        <div className='card projectItem'>
            <img src={img} alt="project icon" className="card-img-top projectImage" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <Link className="btn btn-primary" to={link}>Come visit !</Link>
            </div>
        </div>
    );
}

const ProjectSection = () => {
    return (
        <div id="projects" className='my-5'>
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
    )
}


export default ProjectSection;