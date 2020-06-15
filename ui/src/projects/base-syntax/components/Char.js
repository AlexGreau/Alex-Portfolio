import React from 'react';

const Char = (props) => {


    return (
        <div onClick={props.clickHandler}>
            {props.char}
        </div>
    )
}


export default Char