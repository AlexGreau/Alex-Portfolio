import React from 'react';
import classes from './components.module.css'

const Artist = (props) => {
    if (!props.artist) return null;
    const { images, followers, name, genres } = props.artist;
    return (
        <div className={classes.artist}>
            <h2>{name}</h2>
            <img alt="artist profile"
             src={images[0] && images[0].url}
             className={classes.artistPic}></img>
             <p>{genres.join()}</p>
            <p>{followers.total} followers</p>

        </div>
    )
}

export default Artist