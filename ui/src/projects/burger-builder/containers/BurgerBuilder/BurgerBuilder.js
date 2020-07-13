import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/ui/modal/Modal'
import OrderSummary from '../../components/burger/orderSummary/OrderSummary'

import INGREDIENT_PRICES from '../../data';
import Spinner from '../../components/ui/spinner/Spinner';

import Checkout from '../checkout/Checkout'

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
        URL : '/',
    }

    componentDidMount() {
        this.setState({URL: this.props.match.url})
        axios.get('https://burgerbuilder-826b6.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ ingredients: res.data })
            })
            .catch(error => { this.setState({ error: true }) })
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
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchasable(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchasable(updatedIngredients);
    }

    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map(
            igKey => {
                return ingredients[igKey];
            }
        ).reduce((acc, curr) => acc + curr, 0)

        const purchasable = sum > 0;
        this.setState({ purchasable: purchasable })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    cancelOrder = () => {
        this.setState({ purchasing: false });
    }

    continueOrder = () => {
        const queryParams = [];
        for (let ing in this.state.ingredients) {
            queryParams.push(encodeURIComponent(ing) + '=' + encodeURIComponent(this.state.ingredients[ing]))
        }
        //adding total price 
        queryParams.push('price=' + this.state.totalPrice);

        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: this.state.URL + '/checkout',
            search: queryString
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? <Spinner /> : <Spinner/>

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls addHandler={this.addIngredientHandler}
                        removeHandler={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        purchaseHandler={this.purchaseHandler} />
                </Aux>)

            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    cancelOrder={this.cancelOrder}
                    continueOrder={this.continueOrder} />)
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.cancelOrder}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}


export default withErrorHandler(BurgerBuilder, axios);