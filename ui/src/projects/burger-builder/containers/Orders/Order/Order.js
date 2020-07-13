import React, { useEffect, useState } from 'react';
import classes from './Order.module.css';

const Order = (props) => {
    const [ingredients, setIngredients] = useState("");

    useEffect(() => {
        let ing = [];
        console.log(props.ingredients)
        for (let ingredient in props.ingredients) {
            let str = "" + ingredient + " (" + props.ingredients[ingredient] + ")"
            ing.push(str);
        }
        const res = ing.join(", ");
        setIngredients(res);
        return () => {
            return null;
        }
    }, [])

    return (
        <div className={classes.Order}>
            <p>Ingredients : {ingredients}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}
export default Order;