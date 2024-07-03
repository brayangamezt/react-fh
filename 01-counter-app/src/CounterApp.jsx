import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(0);

    const handleClick = (event) =>{
        console.log(event);
        setCounter(counter + 1);
    }


  return (
    <>
      <h1>CounterApp</h1>
      <p> { value } </p>
      <button onClick={handleClick } > +1 </button>
      <h4> { counter } </h4>
    </>
  )
}

CounterApp.propType = {
    value: PropTypes.number.isRequired
}

export default CounterApp
