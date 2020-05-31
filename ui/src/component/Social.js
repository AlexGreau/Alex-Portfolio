import React, { Component } from "react";
import './components.css';

class Social extends Component {

    render() {
        const {name, link, img } = this.props.social;

        return (
            <div className='socialItem'>
                <h2>{name}</h2>
                <a href={link}>{link}</a>
                <img src={img} alt="social icon" className="projectImage" />
            </div>
        )
    }
}

export default Social;