import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import React, { Component } from 'react';
import Layout from './hoc/layout/Layout';
import Checkout from './containers/checkout/Checkout';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <BurgerBuilder></BurgerBuilder>
                    <Checkout/>
                </Layout>
            </div>
        )
    }
}

export default App;