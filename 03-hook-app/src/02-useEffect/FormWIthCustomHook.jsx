import React, {useState, useEffect} from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWIthCustomHook = () => {
    const {form, onInputChange, onReset} = useForm( {username:'', email:'', password:''} );
    const {username, email, password} = form
    

    
  return (
    <>
      <h1>Formulario con custom hook </h1>
      <hr />
      <input type="text" className='form-control' placeholder='User name' name='username' value={username} onChange={onInputChange} />
      <input type="email" className='form-control mt-2' placeholder='Email' name='email'  value={email}    onChange={onInputChange}/>
      <input type="password" className='form-control mt-2' placeholder='password' name='password'  value={password}    onChange={onInputChange}/>
      <button className='btn btn-primary mt-2' onClick={onReset}> Reset </button>
    </>
  )
}
