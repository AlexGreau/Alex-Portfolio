import React, { Component } from 'react';
import './components.css'

import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const SPOTIFY_API_URL = 'https://spotify-api-wrapper.appspot.com/';

class MusicMaster extends Component {
    state = {artistResult: null, tracks: [] };

    updateArtistQuery = (event) => {
        this.setState({ artistQuery: event.target.value })
    }

    searchArtist = (artistQuery) => {
        const url = SPOTIFY_API_URL + 'artist/' + artistQuery;
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                if (res.artists.total > 0) {
                    const artist = res.artists.items[0];
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

    render() {
        return (
            <div className="musicMaster">
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <hr/>
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