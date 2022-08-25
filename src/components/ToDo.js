import React, { useState } from "react";

const ToDo  = (props) => {

    const [isDone, setIsDone] = useState(false);

    const lineThrough = () =>{
        setIsDone((prevValue)=> {
            return !prevValue;
        })
    }

    return(
        <div onClick = {lineThrough}>
            <li style={{textDecoration : isDone ?'line-through' : 'none'}}> {props.text}
            </li>
        </div>
    );
};



export default ToDo;