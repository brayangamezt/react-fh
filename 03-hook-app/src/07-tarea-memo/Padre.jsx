import React, { useCallback, useState } from 'react'
import { Hijo } from './Hijo';

export const Padre = () => {
    const [counter, setcounter] = useState(0);

    const multiIncrement = [2,4,6,8];

    const increment = useCallback( (increment) => {
        setcounter( (oldValue)=> oldValue + increment );
      }, [],
    )
    

  return (
    <>
      <h1> Memo padre: { counter } </h1>
      <hr />
      {
        multiIncrement.map( (num)=>{
            return(
                <Hijo key={num} number={num} increment={increment} />
            )
        } )
      }
    </>
  )
}
