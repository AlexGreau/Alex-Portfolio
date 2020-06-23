import React from 'react';
import classes from './Toolbar.module.css'

import Logo from '../../logo/Logo';
import NavItems from './nav-items/NavItems'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo/>
            <nav>
                <NavItems/>
            </nav>
        </header>
    )
}
export default Toolbar;