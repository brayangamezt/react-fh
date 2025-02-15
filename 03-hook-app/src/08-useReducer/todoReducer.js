export const todoReducer = ( initialState = [], action ) =>{

    switch (action.type) {
        case '[TODO] Add Todo':
            return [action.payload, ...initialState]
        
        case '[TODO] Remove Todo':
            return initialState.filter( (todo)=> todo.id !== action.payload )

        case '[TODO] Complete Todo':
            return initialState.map( (todo)=>{
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done:!todo.done
                    }
                }
                return todo;
            } )

    
        default:
            return initialState;
    }

}