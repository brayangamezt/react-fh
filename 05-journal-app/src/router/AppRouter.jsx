import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

//Componentes principales de cada carpeta
import { AuthRouter } from '../auth/AuthRouter';
import { JournalRouter } from '../journal/JournalRouter';

//Componentes hijos en cada carpeta
import {LoginPage,RegisterPage} from '../auth/pages';
import {JournalPage} from '../journal/pages/JournalPage';


export const AppRouter = () => {
  const routes = createBrowserRouter([

    {
      path:'/',
      element:<JournalRouter/>,
      children:[
        {
          path:'/',
          element:<JournalPage/>
        }
      ]
    },

    {
      path:'auth/*',
      element:<AuthRouter/>,
      children:[
        {
          path:'login',
          element:<LoginPage/>
        },
        {
          path:'register',
          element:<RegisterPage/>
        },
        {
          path: '*',
          element: <Navigate to="/auth/login"/>
      }
      ]
    },
   

  ]);

  return (
    <RouterProvider router={routes} />
  )
}
