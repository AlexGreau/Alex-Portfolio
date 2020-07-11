import React from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary'
import { useState } from 'react';

const Checkout = (props) => { 
    const [ingredients, setIngredients] = useState({
        salad: 1,
        cheese: 1,
        meat: 1,
        bacon: 1
    })

    return (
        <div>
            <CheckoutSummary ingredients={ingredients}/>
        </div>
    );

}
export default Checkout;