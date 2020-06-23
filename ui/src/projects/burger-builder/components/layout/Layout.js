import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../navigation/toolbar/Toolbar'
import SideDrawer from '../navigation/sideDrawer/SideDrawer';

const layout = (props) => {

    return (
        <Aux>
            <SideDrawer/>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;