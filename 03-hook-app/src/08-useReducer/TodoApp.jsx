import { TodoList } from './TodoList' 
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

  const { todos,dones, pending, onDeleteTodo, onNewTodo, onToggleTodo } = useTodo();

  return (
    <>
      <h1>TODO: {dones.length} <small>pendientes: {pending.length} </small></h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
            <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
        </div>
        <div className="col col-5">
            <h4>Add TODO</h4>
            <hr />
            <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  )
}
