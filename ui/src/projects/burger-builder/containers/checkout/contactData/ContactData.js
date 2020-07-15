import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/ui/button/Button';
import Spinner from '../../../components/ui/spinner/Spinner';
import Input from '../../../components/ui/input/Input'

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
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'street name'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'zipCode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your eMail'
                },
                value: ''
            },
            deliveryMehtod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: "Fastest" },
                        { value: 'cheapest', displayValue: "Cheapest" },
                    ]
                },
                value: ''
            }
        }
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElemID in this.state.orderForm){
            formData[formElemID] = this.state.orderForm[formElemID].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
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

    inputChangedHandler = (event, inputID) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputID]};
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputID] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm})
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key],
            })
        }


        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map((element) => {
                    return <Input
                        key={element.id}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        changed={(event) => this.inputChangedHandler(event, element.id)} />
                })}
                <Button btnType="Success" >SUBMIT ORDER</Button>
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