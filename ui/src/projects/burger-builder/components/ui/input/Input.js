import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                className={classes.InputElement}
                value={props.value}
                onChange={props.changed}></input>
            break;
        case ('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                className={classes.InputElement}
                value={props.value} 
                onChange={props.changed}/>
            break;

        case ('select'):
            inputElement = (
                <select
                    {...props.elementConfig}
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => {
                        return <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    })}
                </select>
            )
            break;

        default:
            inputElement = <input
                {...props.elementConfig}
                className={classes.InputElement}
                value={props.value}
                onChange={props.changed}></input>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;