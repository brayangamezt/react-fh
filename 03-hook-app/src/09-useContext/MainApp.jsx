import { Outlet} from "react-router-dom";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

//Este componente y todos los componentes hijos tienen acceso a los valores del provider

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar/>
      <hr />

      {/*Aqui se renderizan las rutas hijas del main app "OUTLET" */}
      <div>
        <Outlet />
      </div>
    </UserProvider>
  )
}
