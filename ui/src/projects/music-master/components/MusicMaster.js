import React, { Component } from 'react';
import './components.css'

import Artist from './Artist'
import Tracks from './Tracks';

const SPOTIFY_API_URL = 'https://spotify-api-wrapper.appspot.com/';

class MusicMaster extends Component {
    state = { artistQuery: '', artistResult: null, tracks: [] };

    updateArtistQuery = (event) => {
        this.setState({ artistQuery: event.target.value })
    }

    searchArtist = () => {
        const url = SPOTIFY_API_URL + 'artist/' + this.state.artistQuery;
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                if (res.artists.total > 0) {
                    const artist = res.artists.items[0];
                    console.log("fetched artist : ", artist)
                    this.setState({ artistResult: artist });
                    this.searchTops(artist.id)
                }
            })
            .catch(err => console.log(err))
    }

    searchTops = (artistId) => {
        const url = SPOTIFY_API_URL + "artist/" + artistId + "/top-tracks";
        fetch(url)
            .then(response => response.json())
            .then(res => {
                this.setState({ tracks: res.tracks})
            })
            .catch(err => console.log(err))
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    render() {
        console.log("state of MM : ", this.state)
        return (
            <div className="musicMaster">
                <h2>Music Master</h2>
                <div className="row justify-content-center">
                    <input className="form-control col-2"
                        id="searchBar"
                        onChange={this.updateArtistQuery}
                        onKeyPress={this.handleKeyPress}
                        placeholder="Search for an Artist" ></input>
                    <button className="btn btn-outline-info ml-2"
                        onClick={this.searchArtist}>
                        Search
                        </button>
                </div>
                {this.state.artistResult ? 
                    <div>
                        <Artist artist={this.state.artistResult} />
                        <Tracks tracks={this.state.tracks} />
                    </div> 
                    : null}
            </div>
        )
    }
}


export default MusicMaster;