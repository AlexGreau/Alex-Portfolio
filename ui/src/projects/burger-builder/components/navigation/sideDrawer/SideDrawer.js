import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../../logo/Logo';
import NavItems from '../toolbar/nav-items/NavItems';
import NavigationItem from '../toolbar/nav-items/item/NavItem';


const SideDrawer = (props) => {



    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItem />
            </nav>
        </div>
    )
}
export default SideDrawer;