import React, { useState } from 'react'

export const TodoAdd = ({onNewTodo}) => {

    const [description, setDescription] = useState('');

    const onSubmitForm = (e) =>{
        e.preventDefault();
        
        if(description.length < 0) return

        let task = {id:new Date().getTime(), description:description, done:false}
        onNewTodo(task);
        setDescription('');
    }

  return (
    <>
      <form onSubmit={onSubmitForm}>
            <input type="text" placeholder='Agregar nueva tarea' className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)} />
            <button type='submit' className='btn btn-outline-primary mt-1' > Agregar </button>
        </form>
    </>
  )
}
