import React from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary'
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import ContactData from './contactData/ContactData';

const Checkout = (props) => {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    });

    const [price, setPrice] = useState(0);

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const ingredientList = {};
        let priceTemp =0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                priceTemp = +param[1];
            } else {
                ingredientList[param[0]] = +param[1];
            }
        }
        setIngredients(ingredientList);
        setPrice(priceTemp);

        return () => {
            return null;
        }
    }, [])

    const URL = props.match.url;

    const continueCheckout = () => {
        props.history.replace(URL + '/contact-data')
    }

    const cancelCheckout = () => {
        props.history.goBack();
    }

    return (
        <div>
            <CheckoutSummary
                ingredients={ingredients}
                continueCheckout={continueCheckout}
                cancelCheckout={cancelCheckout} />
            <Route
                path={URL + '/contact-data'}
                render={(props) => {
                    return <ContactData ingredients={ingredients} price={price} {...props}></ContactData>
                }}>
            </Route>
        </div>
    );

}
export default Checkout;