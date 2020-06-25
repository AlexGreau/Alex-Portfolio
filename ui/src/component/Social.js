import React from "react";
import './components.css';
import SOCIALS from '../data/socials'

const Social = props => {
    const { name, link, img } = props.social;

    return (
        <a href={link} className="btn btn-outline-light" >
            <img src={img} alt={name} className="socialProfileImg" />
        </a>
    )
}

const SocialSection = () => {
    return (
        <div className="btn-group" role="group">
            {
                SOCIALS.map(SOCIAL => {
                    return (
                        <Social key={SOCIAL.id} social={SOCIAL} />
                    )
                })
            }
        </div>
    )
}

export default SocialSection;