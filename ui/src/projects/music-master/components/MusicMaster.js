import React, { Component } from 'react';
import './components.css'

class MusicMaster extends Component {
    state = { artistQuery: '', artistResult: {} };

    updateArtistQuery = (event) => {
        console.log(event.target.value)
        this.setState({ artistQuery: event.target.value })
    }

    searchArtist = () => {
        const url = 'https://spotify-api-wrapper.appspot.com/artist/' + this.state.artistQuery;
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                this.setState({artistResult: res.artists.items[0]})
                console.log(this.state)
            })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    render() {
        return (
            <div className="musicMaster">
                <h2>Music Master</h2>
                <div className="row justify-content-center">
                    <input className="form-control mr-sm-2 col-2"
                        onChange={this.updateArtistQuery}
                        onKeyPress={this.handleKeyPress}
                        placeholder="Search for an Artist" ></input>
                    <button className="btn btn-outline-info my-2 my-sm-0"
                        onClick={this.searchArtist}>
                        Search
                        </button>
                </div>
                <div>
                    {this.state.artistQuery}
                </div>
            </div>
        )
    }
}


export default MusicMaster;