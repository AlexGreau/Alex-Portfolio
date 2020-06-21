import React from 'react';
import Ingredient from './ingredients/BurgerIngredient';
import classes from './Burger.module.css'
import BurgerIngredient from './ingredients/BurgerIngredient';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(
        igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey} />
            }
            )
        }
    ).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if (transformedIngredients.length === 0){
     transformedIngredients = <p>Please start adding some ingredients</p>
    }

    console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"></Ingredient>
            {transformedIngredients}
            <Ingredient type="bread-bottom"></Ingredient>

        </div>
    )
}
export default Burger;