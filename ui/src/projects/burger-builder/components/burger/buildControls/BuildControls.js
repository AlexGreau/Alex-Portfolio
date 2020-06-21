import React from 'react'; 
import classes from './BuildControls.module.css'
import Buildcontrol from './buildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => { 
 return ( 
    <div className={classes.BuildControls}>
        {
            controls.map((control) => {
                return <Buildcontrol key={control.label} label={control.label} moreHandler={() => props.addHandler(control.type)}/>
            })
        }
    </div>
) 
}
export default buildControls;