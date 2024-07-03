import { useContext } from "react"

//Importamos el user context para indicarle a react que contexto queremos 
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const firstOne = useContext( UserContext );
  console.log(firstOne)

  return (
    <>
      <h1> LoginPage </h1>
      <hr />
    </>
  )
}
