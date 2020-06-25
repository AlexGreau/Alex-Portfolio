import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import React, { Component } from 'react';
import Layout from './components/layout/Layout'

class App extends Component {



    render() {
        return (
            <div>
                <Layout>
                    <BurgerBuilder></BurgerBuilder>
                </Layout>
            </div>
        )
    }
}

export default App;