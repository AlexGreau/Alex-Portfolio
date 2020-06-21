import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>build controls</div>
            </Aux>

        )
    }
}


export default BurgerBuilder;