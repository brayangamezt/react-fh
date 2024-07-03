import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () =>{
    return JSON.parse( localStorage.getItem('todos')) || [];
}

const initialState = [];

export const useTodo = () =>{

    //Funcion init sirve para inicializar el state
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const dones = todos.filter( (todo)=>{
        return todo.done === true
    } )

    const pending = todos.filter( todo=>{
        return todo.done === false
    } )

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos])
    

    //Funcion para agregar un nuevo valor al reducer
    const onNewTodo = (newTodo) =>{
      const action ={ type:'[TODO] Add Todo', payload:newTodo }
      dispatch(action);
    }

    const onDeleteTodo = (todoDelete) =>{
      dispatch({type:'[TODO] Remove Todo', payload:todoDelete})
    }

    const onToggleTodo = (id) =>{
      dispatch({type:'[TODO] Complete Todo', payload:id})
    }

    return {
        todos,
        dones,
        pending,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo
    }
}