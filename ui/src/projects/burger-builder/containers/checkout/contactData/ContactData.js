import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/ui/button/Button';
import Spinner from '../../../components/ui/spinner/Spinner'

import axios from '../../../axios-order'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'dummy',
                address: {
                    street: 'testStreet',
                    zipCode: '123456',
                    country: 'utopia'
                },
                email: "test@test.com"
            },
            deliveryMehtod: 'fastest'
        }
        axios.post('/orders.json', order)
            // .json used for firebase to understand that orders is a new node
            .then(
                response => {
                    this.setState({ loading: false });
                    this.props.history.push('/burger-builder')
                }
            )
            .catch(error => console.log(error));
    }

    render() {

        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your address street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Your  postal code" />
                <Button btnType="Success" clicked={this.orderHandler} >SUBMIT ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter you contact data</h4>
                {form}
            </div>
        );
    }
}
export default ContactData;