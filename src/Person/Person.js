import React from 'react';
// import Radium from 'radium';

import classes from './personstyle.css';

const person = ( props ) => {
    // Radium >>>> 
    // const style = {
    //     '@media (min-width: 600px)' : {
    //         width : "450px"
    //     }
    // };
    return (
        <div className={classes.Person}> 
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input className={classes.input} type="text" onChange={props.changed} value={props.name} />
            <input className={classes.input} type="number" onChange={props.changedAge} value={props.age} />
        </div>
    )
};

export default person;