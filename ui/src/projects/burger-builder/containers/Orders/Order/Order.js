import React, { useEffect, useState } from 'react';
import classes from './Order.module.css';

const Order = (props) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        let ing = [];
        console.log(props.ingredients)
        for (let ingredient in props.ingredients) {
            ing.push({
                name: ingredient,
                amount: props.ingredients[ingredient]
            });
        }
        setIngredients(ing);
        return () => {
            return null;
        }
    }, [])

    const ingredientsOutput = ingredients.map(
        ig=>{
            return <span key={ig.name} className={classes.ingredientList}>{ig.name} ({ig.amount}) </span>
        }
    ) 

    return (
        <div className={classes.Order}>
            <p>Ingredients : {ingredientsOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}
export default Order;