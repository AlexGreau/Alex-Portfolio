import React, { Component } from "react";
import './components.css';
import Title from './Title';
import { getName } from '../Routes';


class Bio extends Component {
    state = {
        displayBio: false,
        titleIndex: 0,
    }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        const name = getName();
        return (
            <div className="home">
                <h1>Hello ! thanks for coming :)</h1>
                <p>My name is {name}</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <Title />
                            <button onClick={this.toggleDisplayBio} className="btn btn-outline-info">show less</button>
                        </div>
                    ) : <button onClick={this.toggleDisplayBio} className="btn btn-info">show more</button>
                }
            </div>
        );
    }
}

export default Bio;