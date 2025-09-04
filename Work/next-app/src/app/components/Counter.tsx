// This component is rendered on server side despite being a client side

"use client";

import {useState} from "react";

export function Counter(){
    const [count, setCount]= useState(0);
    return (
        <button onClick={() => setCount(count +1)} > count : {count}</button>
    )

}