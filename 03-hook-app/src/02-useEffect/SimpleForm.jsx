import React, {useState, useEffect} from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [form,setForm ] = useState({username:'', email:''});

    // Sirve para disparar efectos secundarios
    //1.-Si colocamos un arreglo vacio como segundo parametro, el useEffect solo se disparara una vez, es decir cuando el componente -->
    //   se monta por primera vez
    //2.- Si queremos que se ejecute cada vez que cambia alguna propiedad, lo hacemos como en el segundo useEffect
    //3.- Para mostrar lo que pasa cuando se monta y se desmonta un componente, utilizamos el componente message y un useEffect dentro
    useEffect( ()=>{
      console.log('Use Effect called')
    },[] );

    useEffect( ()=>{
      // console.log('The form has change')
    }, [form] );

    const {username, email} = form;

    //Estamos extrayendo el target que viene en el evento
    const onInputChange = ({target}) =>{
      const {name, value} = target;
      setForm({
        ...form,
        [name]:value
      });
    }

  return (
    <>
      <h1>Simple form </h1>
      <hr />
      <input type="text" className='form-control' placeholder='User name' name='username' value={username} onChange={onInputChange} />
      <input type="email" className='form-control mt-2' placeholder='Email' name='email'  value={email}    onChange={onInputChange}/>

      {
        (username === 'brayangamez') && <Message/>
      }
    </>
  )
}

