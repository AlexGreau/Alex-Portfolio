import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../../logo/Logo';
import NavigationItems from '../toolbar/nav-items/NavItems';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../ui/backdrop/Backdrop'

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/> 
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    )
}
export default SideDrawer;