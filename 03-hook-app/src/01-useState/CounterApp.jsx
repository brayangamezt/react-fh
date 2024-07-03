import {useState} from 'react'

export const CounterApp = () => {
    //Los STATE no siempre tienen valores primitivos como numeros o strings, tambien pueden tener objetos
    const [ {counter1, counter2, counter3}, setCounters ] = useState({ counter1:10, counter2:20, counter3:30});
    const [ counter, setCounter ] = useState(10);
    const [ names, setNames ] = useState(['octavio', 'ivan']);
    const [ name, setName ] = useState('');

    const addName = (e) =>{
        e.preventDefault();
        setNames([name, ...names]);
    }



  return (
    <>
      {/*Testing useState with numbers*/}
      <h3>Counter: {counter} </h3>
      <br />
      <button className='btn btn-success' onClick={ (e)=>{setCounter(counter + 1)} } > +1 </button>
      <button className='btn btn-danger' onClick={ (e)=>{ setCounter(counter - 1) } } > -1 </button>

      {/*Testing useState with objects*/}
      <hr />
      <h1>Contador de objetos</h1>
      <p> valor primer contador: {counter1} </p>
      <p> valor segundo contador: {counter2} </p>
      <p> valor tercero contador: {counter3} </p>
      <button className='btn btn-primary' onClick={ ()=>{ setCounters( {counter1: counter1 + 1, counter2, counter3} ) } } > counter1 +1</button>

      {/*Testing useState with arrays*/}
      <hr />
      <h1>Names</h1>
      <form onSubmit={addName} >
        <input type="text" name="names" placeholder='add name' value={name} onChange={ (e)=>{ setName(e.target.value) } } />
      </form>
      <br />
      <ul>
        {
            names.map( (namee,index)=>{
                return(
                    <li key={index} > {namee} </li>
                )
            } )
        }
      </ul>
    </>
  )
}


