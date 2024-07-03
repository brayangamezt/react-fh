import React from 'react'

export const ShowIncrement = React.memo( ({increment}) => {

    console.log('se ejecuto nuevamente');

  return (
    <>
      <button onClick={ increment } className='btn btn-primary mt-2'> incrementar </button>
    </>
  )
 } 
)
