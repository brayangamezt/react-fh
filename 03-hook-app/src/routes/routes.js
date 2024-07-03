import {RouterProvider, createBrowserRouter } from 'react-router-dom';

//Componentes
import {AboutPage, MainApp,LoginPage,HomePage} from '../09-useContext';

export const Routes = () => {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainApp />,
        },
        {
            path:'/home',
            element:<HomePage />
        },
        {
            path:'/login',
            element:<LoginPage />
        },
        {
            path:'/about',
            element:<AboutPage />
        },
    ]);

    return <RouterProvider router={router} />
}