import React from 'react'

export const TodoItem = ({description, done, idTodo, onDeleteTodo, onToggleTodo}) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between'>
        <span className={`align-self-center ${done && 'text-decoration-line-through'}`}> {description} </span>
        <div>
          <button className='btn btn-success' onClick={ ()=>{ onToggleTodo(idTodo) } } > Completa </button>
          <button className='btn btn-danger' onClick={ ()=>{ onDeleteTodo(idTodo) } }>Eliminar</button>
        </div>
      </li>
    </>
  )
}
