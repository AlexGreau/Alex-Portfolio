import React from 'react';
import classes from './BuildControl.module.css';

const Buildcontrol = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>less</button>
            <button className={classes.More} onClick={props.moreHandler}>more</button>
        </div>
    )
}
export default Buildcontrol;