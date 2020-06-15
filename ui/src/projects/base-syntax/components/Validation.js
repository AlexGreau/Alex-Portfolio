import React from 'react';

const Validation = (props) => {
    let verdict = "no verdict"

    if (props.textLength < props.criteriaMin) {
        verdict = "Input not long enough :";
    } else {
        verdict = "Input has a valid length :";
    }

    return (
        <div>
            <p>{verdict} {props.textLength}</p>
        </div>
    );
}


export default Validation;