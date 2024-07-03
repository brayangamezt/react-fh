import { UserContext } from "./UserContext"

/*
1.- Con la propiedad children obtenemos todos los componentes hijos de este componente
2.- Importamos el componente donde tenemos guardado nuestro componente padre, que en este caso es USER CONTEXT mas provider
3.- Despues llevamos este componente a donde queremos utilizar y poder acceder a los valores, en este caso al componente MAIN APP
*/

const user = {
    name:'brayan',
    apellido:'gamez',
    edad:28
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola:'mundo', user:user}}>
        {children}
    </UserContext.Provider>
  )
}
