import React from 'react';
import classes from './Burger.css';
import Burgeringredient from './Burgeringredients/Burgeringredients';
const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
    .map(igkeys => {
        return [...Array(props.ingredients[igkeys])].map((_,i) => {
            return <Burgeringredient key={igkeys+i} type={igkeys}/>
        });
    }  ).reduce((arr , el) => {
        return arr.concat(el)
    } , [] );

    if( transformIngredients.length === 0 ) {
        transformIngredients = <p> Please start adding ingredients !! </p>;
    }
    console.log(transformIngredients);  
    return(
        <div className={classes.Burger}>
                <Burgeringredient type="bread-top" />
                {transformIngredients}
                <Burgeringredient type="bread-bottom" />
        </div>
    );
}
export default burger;
