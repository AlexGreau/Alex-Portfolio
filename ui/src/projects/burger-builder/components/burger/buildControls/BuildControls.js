import React from 'react';
import classes from './BuildControls.module.css'
import Buildcontrol from './buildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Total Price : <strong>{props.totalPrice.toFixed(2)} $</strong></p>
            {
                controls.map((control) => {
                    return <Buildcontrol key={control.label}
                        label={control.label}
                        moreHandler={() => props.addHandler(control.type)}
                        lessHandler={() => props.removeHandler(control.type)}
                        disabled={props.disabled[control.type]}
                    />
                })
            }

            <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchaseHandler}>ORDER NOW</button>
        </div>
    )
}
export default buildControls;