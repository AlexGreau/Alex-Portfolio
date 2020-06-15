import React, { Component } from 'react';
import classes from './components.module.css';


class Tracks extends Component {
    state = {
        playing: false,
        audio: null,
        previewUrlPlaying: null,
    }

    componentWillUnmount() {
        this.state.audio.pause();
        this.setState({ playing: false});
    }

    playAudio = (preview_url) => () => {
        if (!preview_url){
            alert("No preview available for this song.. :(");
            return;
        }
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

    trackIcon = track => {
        if (!track.preview_url) {
          return <span>N/A</span>;
        }
    
        if (
          this.state.playing &&
          this.state.previewUrlPlaying === track.preview_url
        ) {
          return <span>| |</span>;
        }
    
        return <span>&#9655;</span>;
      }

    render() {
        return (
            <div className={classes.tracksSection}>
                {this.props.tracks.map(track => {
                    return (
                        <Track track={track} clickHandler={this.playAudio(track.preview_url)} iconHandler={this.trackIcon(track)} key={track.id}></Track>
                    )
                })}
            </div>
        )
    }

}

const Track = (props) => {
    const track = props.track;
    const handler = props.clickHandler;
    const iconHandler = props.iconHandler;
    return (
        <div key={track.id} onClick={handler} className={classes.track}>
            <img src={track.album.images[0] && track.album.images[0].url} alt="track" className={classes.trackImage} />
            <p className={classes.track_icon}>{iconHandler}</p>
            <p className={classes.track_text}>{track.name}</p>
        </div>
    )
}

export default Tracks;