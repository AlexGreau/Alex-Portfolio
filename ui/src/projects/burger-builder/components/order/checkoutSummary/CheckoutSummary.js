import React from 'react';
import classes from './CheckoutSummary.module.css';

import Burger from '../../burger/Burger'
import Button from '../../ui/button/Button'
const CheckoutSummary = (props) => { 
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Bon appetit !</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button btnType="Danger" clicked>CANCEL</Button>
            <Button btnType="Success" clicked>CONTINUE</Button>

        </div>
    )
}
export default CheckoutSummary;