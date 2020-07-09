import React from 'react';
import Modal from '../../components/ui/modal/Modal';
import Aux from '../Auxiliary';
import { Component } from 'react';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(
                req => {
                    this.setState({ error: null })
                    return req;
                }
            );
            this.resInterceptor = axios.interceptors.response.use(res=> res, error => {
                this.setState({ error: error })
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler= () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        Something went wrong :(  
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler;