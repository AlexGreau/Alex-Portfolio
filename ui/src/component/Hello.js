import React from "react";
import './components.css';
import HiBear from '../assets/hello.jpg';

const Hello = () => {
    const styles = {
        flex: `1 1 auto`,
        background: `url(${HiBear}) no-repeat center fixed`,
        backgroundSize: `cover`,
        height: `100vh`
    }

    return (
        <div style={styles} className='p-0'>
        </div>
    )
}

export default Hello;