import React from 'react';
import ReactDOM from 'react-dom/client';
import HooksApp from './HooksApp';
import './index.css';

import {AboutPage, MainApp,LoginPage,HomePage} from './09-useContext';

import {RouterProvider, createBrowserRouter, Navigate} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        children:[
            {
                path:'/',
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
            {
                path:"*",
                element:<Navigate to='/' />
            }
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <HooksApp/>
    </React.StrictMode>
)
