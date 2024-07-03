import React from 'react'

export const Hijo = React.memo(({number, increment}) => {

    console.log('ejecutado desde el hijo')
    
  return (
    <>
      <button className='btn btn-primary' 
      onClick={ ()=> increment(number) } > 
        {number} 
      </button>
    </>
  )
})
