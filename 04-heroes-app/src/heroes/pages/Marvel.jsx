import React from 'react'
import { HeroesList }  from '../components';

export const Marvel = () => {
  return (
    <>
      <h1> Marvel Comics </h1>
      <hr />
      <HeroesList publisher={'Marvel Comics'} />
    </>
  )
}
