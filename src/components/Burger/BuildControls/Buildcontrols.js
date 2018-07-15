import React from 'react';
import classes from './Buildcontrols.css';
import BuildControl from './Buildcontrol/Buildcontrol'

const controls = [
    {label: 'Salad' , type:'salad'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Meat' , type: 'meat'},
];
const buildControls = (props) => (
    <div className={classes.Buildcontrols}>
    {controls.map(ctrl => (
        <BuildControl 
        label={ctrl.label} 
        type={ctrl.type}
        added = {() => props.addIng(ctrl.type)}
        removed = {() => props.removeIng(ctrl.type)}
        />
    ))}
    </div>
);

export default buildControls;