import React from "react";
import './components.css';
import hello from '../assets/hello.jpg';


const Hello = () => {
    return (
        <div id='helloDiv' className='p-0'>
            <img id='hello' src={hello} className="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

export default Hello;