import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';

import INGREDIENT_PRICES from '../../data';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        console.log("ingredient added : ", this.state)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = [...this.state.ingredients];
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients })
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addHandler={this.addIngredientHandler} removeHandler={this.removeIngredientHandler} />
            </Aux>

        )
    }
}


export default BurgerBuilder;