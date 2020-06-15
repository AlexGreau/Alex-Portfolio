import React from 'react';


const UserOutput = (props) => {
    return (
        <div className="ml-4">
            <p>{props.title} {props.output}</p>
        </div>
    )
}

export default UserOutput;