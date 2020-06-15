import React from 'react';


const UserInput = (props) => {

    return (
        <div className="ml-2">
            <input type="text" onChange={props.changeHandler} value={props.name}></input>
        </div>
    )
}

export default UserInput;