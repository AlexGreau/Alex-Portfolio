import React, { Component } from "react";
import './components.css';

class Social extends Component {

    render() {
        const { name, link, img } = this.props.social;

        return (
            <a href={link} class="btn btn-outline-light" >
                <img src={img} alt={name} className="projectImage" />
            </a>
        )
    }
}

export default Social;