import React, {useEffect} from 'react'

export const Message = () => {

    useEffect( ()=>{

        //Para desmontar un listener debe crearse una funcion en lugar de pasar un callback como segundo parametro
        const onMoveMouse = ({x,y}) =>{
            const coords = {x,y};
            console.log(coords)
        }

        //Se ejecuta cuando el componente aparece por primera vez
        window.addEventListener( 'mousemove', onMoveMouse);

        //Esto se va ejecutar cuando el componente salga de la vista principal REMOVIENDO el evento listener
        return ()=>{
            window.removeEventListener('mousemove',  onMoveMouse)
        }
    },[] )

  return (
    <>
      <h1> Usuario ya existe </h1>
    </>
  )
}
