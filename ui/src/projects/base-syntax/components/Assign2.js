import React, { useState } from 'react';


import Userinput from './Input';
import UserOutput from './Output';
import Validation from './Validation';
import Char from './Char';

const Assign2 = () => {
    const [text, setText] = useState("First name");
    const [minLength, setMinLength] = useState(5);

    const inputHandler = (event) => {
        setText(event.target.value)
    }

    const charClickHandler = (event, index) => {
        console.log(index + text[index])
        deleteChar(index)
    }

    const deleteChar = (index) => {
        if (text.length < minLength) {
            console.log("text not long enough, length = " + text.length)
            return;
        }
        console.log("deleting : ", text[index])
        let txt = [...text];
        txt.splice(index, 1);
        setText(txt.join(""));
    }
    
    let chars = [...text];
    return (
        <div id='base-syntax'>
            <h2>Assignment 2 : Lists and conditionals </h2>
            <Userinput changeHandler={inputHandler} name={text} />
            <UserOutput output={text} title="Input text :" />
            <UserOutput output={text.length} title="Input length :" />
            <Validation textLength={text.length} criteriaMin={minLength} />
            {
                chars.map((extract, index) => {
                    return <Char char={extract} key={index} clickHandler={(event) => charClickHandler(event, index)}/>
                })
            }
        </div>
    )
}

export default Assign2;