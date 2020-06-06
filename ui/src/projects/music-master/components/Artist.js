import React from 'react';


const Artist = (props) => {
    if (!props.artist) return null;
    const { images, followers, name, genres } = props.artist;
    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join()}</p>
            <img alt="artist profile"
             src={images[0] && images[0].url}
             className="artistProfile"></img>
        </div>
    )
}

export default Artist