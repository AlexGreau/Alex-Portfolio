import React from 'react';
import Aux from "../../../hoc/Auxiliary";

import Button from '../../ui/button/Button'

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(
        igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey} </span>
                    : {props.ingredients[igKey]}
                </li>
            )
        }
    )

    return (
        <Aux>
            <h3>Your order</h3>
            <p>Mad burger with the following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue Checkout ?</p>
            <Button clicked={props.cancelOrder} btnType="Danger">Cancel</Button>
            <Button clicked={props.continueOrder} btnType="Success">Continue</Button>
        </Aux>
    )
}
export default OrderSummary;