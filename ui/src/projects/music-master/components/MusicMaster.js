import React, { Component } from 'react';
import './components.css'

class MusicMaster extends Component {
    state = {artistQuery: ''};

    updateArtistQuery = () => {

    }

    render () {
        return (
            <div id="body">
                <h2>Music Master</h2>
                <input placeholder='Search for an Artist' onChange={this.updateArtistQuery}></input>
                <button className="btn btn-dark">Search</button>
            </div>
        )
    }
}


export default MusicMaster;