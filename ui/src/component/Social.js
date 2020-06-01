import React from "react";
import './components.css';

const Social = props => {
    const { name, link, img } = props.social;

    return (
        <a href={link} className="btn btn-outline-light" >
            <img src={img} alt={name} className="socialProfileImg" />
        </a>
    )
}

export default Social;