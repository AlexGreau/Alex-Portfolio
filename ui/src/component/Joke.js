import React, { Component } from "react";

class Joke extends Component {
    state = { joke: {} };

    componentDidMount() {
        const url = '/randomJoke'
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({ joke: json })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { setup, punchline } = this.state.joke
        return (
            <div>
                <h2>Joke of the day</h2>
                <p>{setup}</p>
                <p><em>{punchline}</em></p>
            </div>
        )
    }
}

export default Joke;