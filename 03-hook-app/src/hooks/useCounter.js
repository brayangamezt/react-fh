// a HOOK is just a function, this function must return something like array, object, number etc

import { useState } from "react"

export const useCounter = (initialValue=10) =>{
    const [ counter, setCounter ] = useState(initialValue);

    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    const reset = () =>{
        setCounter(0);
    }

    return {
        counter:counter,
        increment,
        decrement,
        reset
    }
}