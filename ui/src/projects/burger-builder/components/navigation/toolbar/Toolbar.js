import React from 'react';
import classes from './Toolbar.module.css'

import Logo from '../../logo/Logo';
import NavItems from './nav-items/NavItems';
import ToggleDrawer from '../sideDrawer/toggleDrawer/ToggleDrawer'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <ToggleDrawer toggleDrawer={props.drawerToggleHandler} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
    )
}
export default Toolbar;