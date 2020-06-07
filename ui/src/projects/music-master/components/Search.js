import React, { Component } from 'react';

class Search extends Component {
    state = { artistQuery: '' };

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }

    render() {
        return (
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
        )
    }
}

export default Search; 