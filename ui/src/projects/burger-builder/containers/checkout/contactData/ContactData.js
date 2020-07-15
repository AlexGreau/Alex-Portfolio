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
        formIsValid: false,
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                modified: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'street name'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                modified: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'zipCode'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 6
                }, 
                valid: false,
                modified: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                modified: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your eMail'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                modified: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: "Fastest" },
                        { value: 'cheapest', displayValue: "Cheapest" },
                    ]
                },
                value: 'fastest',
                modified: false,
                valid: true,
                validation: {}
            }
        }
    };

    checkValidity = (value, rules) => {
        let isValid = true; 

        if (rules.required) {
            isValid = value.trim() !=='' && isValid;
        }
        if (rules.minLength) {
            isValid= value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid= value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElemID in this.state.orderForm) {
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
        const updatedOrderForm = { ...this.state.orderForm };
        const updatedFormElement = { ...updatedOrderForm[inputID] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[inputID] = updatedFormElement;
        updatedFormElement.modified = true;

        // checking whole form validity
        let isFormValid = true;
        for (let inputID in updatedOrderForm) {
            if (!updatedOrderForm[inputID].valid) {
                console.log("isfalse : ", inputID, inputID.value)
                isFormValid = false;
            } 
        }

        this.setState({ orderForm: updatedOrderForm, formIsValid: isFormValid })
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
                        isValid={element.config.valid}
                        shouldValidate={element.config.validation && element.config.modified}
                        changed={(event) => this.inputChangedHandler(event, element.id)} />
                })}
                <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT ORDER</Button>
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