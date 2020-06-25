import React from 'react';
import Item from './item/NavItem'
import classes from './NavItems.module.css'

const NavItems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <Item link="/" active>Burger Builder</Item>
            <Item link="/" >Checkout </Item>
        </ul>
    )
}
export default NavItems;