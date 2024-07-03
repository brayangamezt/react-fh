import React, { useRef } from 'react'

//La idea de utilizar el useRef es que al momento de dar click en el boton, este me seleccione el input para escribir
//Con use Ref podemos seleccionar elementos del DOM 

export const FocusScreen = () => {
    const inputRef = useRef();

    const onSelectInput = () =>{
        inputRef.current.select();
    }

  return (
    <>
      <h1>Focus screen</h1>
      <hr />
      <input ref={inputRef} type="text" placeholder='Ingrese su nombre' className='form-control' />
      <button className='btn btn-primary mt-2' onClick={onSelectInput}> Set focus </button>
    </>
  )
}
