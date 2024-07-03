import { Children } from "react";

const initialState = [{
    id:1,
    todo:'Recolectar la piedra del alma',
    done:false
}];

// Un reducer es una funcion, que recibe dos argumentos, que son un estado inicial y el action
// El reducer siempre debe de retornar un estado
const todoReducer = (state = initialState, action={}) =>{

    if(action.type === '[TODO] add todo'){
        return [ ...state, action.payload]
    }

    return state
}

let todos = todoReducer()


const newTodo = {
    id:2,
    todo:'Encontrar la piedra del poder',
    done:false
}

const todoAction = {
    type:'[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, todoAction)

console.log(todos)