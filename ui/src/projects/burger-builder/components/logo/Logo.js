import React from 'react';
import burger from '../../assets/burger.png';

import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burger} alt="my B" />
        </div>
    )
}
export default Logo;