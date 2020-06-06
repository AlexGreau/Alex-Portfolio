import React from 'react';

const Tracks = (props) => {
    // props.track.preview_url
    console.log("tracks props ", props)
    return (
        <div>
            {props.tracks.map(track => {
                return (
                    <Track track={track} key={track.id}></Track>
                )
            })}
        </div>
    )

}

const Track = (props) => {
    const track = props.track;
    console.log("track : ", track)
    return (
        <div key={track.id} onClick={playAudio(track.preview_url)}>
            <img src={track.album.images[0] && track.album.images[0].url} alt="track" className="trackImage" />
            <p>{track.name}</p>
        </div>
    )
}

const playAudio = (audioUrl) => () => {
    console.log("audio url ", audioUrl)
    const audio = new Audio(audioUrl);
    audio.play();
}


export default Tracks;