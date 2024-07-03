import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement"

//El useCallback sirve para memorizar funciones, y evitar que se esten renderizando en otros componentes

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    //Si quiero guardar en memoria el valor de mi funcion se hace de la siguiente manera, usando useCallback
    const increment = useCallback( () => {
        setCounter( (value)=> value + 1 );
      },[],
    )
    
    /*
      Si paso la funcion directamente de esta forma al parametro hijo, como el componente hijo esta cambiando el componente padre, el 
      componente padre se vuelve a renderizar, creando una nueva posicion en memoria para nuestra funcion incremente, y ejecutando el codigo
      del componente hijo nuevamente.
      Entonces si queremos que nuestra funcion que pasamos como parametro quede guardada en memoria, solo necesitamos usar useCallback
    */

    // const increment = () =>{
    //     setCounter(counter + 1);
    // }

    return (
    <>
      <h1> useCallback Hook { counter } </h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  )
}
