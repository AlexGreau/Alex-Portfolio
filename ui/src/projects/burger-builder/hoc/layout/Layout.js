import React from 'react';
import Aux from '../Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/navigation/toolbar/Toolbar'
import SideDrawer from '../../components/navigation/sideDrawer/SideDrawer';
import { Component } from 'react';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer }
        });
    }

    render() {
        return (
            <React.Fragment>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <Toolbar drawerToggleHandler={this.sideDrawerOpenHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </React.Fragment>
        )
    }

}

export default Layout;