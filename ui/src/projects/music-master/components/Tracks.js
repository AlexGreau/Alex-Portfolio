import React, { Component } from 'react';

class Tracks extends Component {
    state = {
        playing: false,
        audio: null,
        previewUrlPlaying: null,
    }

    playAudio = (preview_url) => () => {
        if (this.state.playing) {
            if (preview_url === this.state.previewUrlPlaying) {
                // stop playing
                this.state.audio.pause();
                this.setState({ playing: false});
            } else {
                this.state.audio.pause();
                // start another song
                const audioTrack = new Audio(preview_url);
                this.setState({ audio: audioTrack, playing: true, previewUrlPlaying: preview_url});
                audioTrack.play();
            }
        } else {
            const audioTrack = new Audio(preview_url);
            // play music
            this.setState({ audio: audioTrack, playing: true, previewUrlPlaying: preview_url});
            audioTrack.play();
        }
    }

    render() {
        return (
            <div className="tracksSection">
                {this.props.tracks.map(track => {
                    return (
                        <Track track={track} clickHandler={this.playAudio(track.preview_url)} key={track.id}></Track>
                    )
                })}
            </div>
        )
    }

}

const Track = (props) => {
    const track = props.track;
    const handler = props.clickHandler;
    return (
        <div key={track.id} onClick={handler} className="col-2">
            <img src={track.album.images[0] && track.album.images[0].url} alt="track" className="trackImage" />
            <p>{track.name}</p>
        </div>
    )
}

export default Tracks;