import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import React, { Component } from 'react';
import Layout from './hoc/layout/Layout';
import Checkout from './containers/checkout/Checkout';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
    render() {
        const URL = this.props.match.url;
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path={URL + "/checkout"} component={Checkout}></Route>
                        <Route path={URL + '/'} component={BurgerBuilder}></Route>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App;