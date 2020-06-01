import React, { Component } from "react";

class Joke extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        this.fetchJoke();
    }

    fetchJoke = () => {
        const url = '/randomJoke'
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({ joke: json })
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    joke: { id: 404, setup: 'could not fetch the joke :(', punchline: '' }
                })
            });
    }

    render() {
        const { setup, punchline } = this.state.joke
        return (
            <div>
                <h2>Joke of the day</h2>
                <p>{setup}</p>
                <p><em>{punchline}</em></p>
                <button onClick={this.fetchJoke} className="btn btn-light">Another joke ?</button>
            </div>
        )
    }
}

const JokeSection = () => {
    return (
        <div>
            <hr />
            <Joke />
        </div>
    )
}

export default JokeSection;