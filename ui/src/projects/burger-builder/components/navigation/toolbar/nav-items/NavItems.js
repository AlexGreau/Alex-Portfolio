import React from 'react';
import Item from './item/NavItem'
import classes from './NavItems.module.css'

import { withRouter } from 'react-router-dom';

const NavItems = (props) => {
    const URL = props.match.url;

    return (
        <ul className={classes.NavItems}>
            <Item link={URL}>Burger Builder</Item>
            <Item link={URL + "/orders"} >Orders</Item>
        </ul>
    )
}
export default withRouter(NavItems);