import React from 'react'

//we use prop types to define the type of the props
import PropTypes from 'prop-types';

const myFunction = (name) =>{
  return `Hello ${name} welcome to my function`
}

const FirstApp = ({name, lastName, age}) => {

  const newMessage = 'This site is form my component';
  const name2 = 'Isaac';

  return (
    <>
      <h1> {newMessage} </h1>
      <h4> {myFunction(name2)} </h4>
      <p>Este es el contenido de la pagina principal</p>
      <br />
      <h1>Person information</h1>
      <p> The name is: <strong> { name } </strong> </p>
      <p> The last name is: <strong> { lastName } </strong> </p>
      <p> The age is: <strong> { age } </strong> </p>
    </>
  )
}

//This is to force the type of variable in the component
FirstApp.propTypes={
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number
}

export default FirstApp
