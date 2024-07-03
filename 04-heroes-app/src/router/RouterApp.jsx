import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

//import heroes components
import {DC, Marvel, Search, Heroe} from '../heroes/pages';
import { HeroesApp } from '../HeroesApp';

import {LoginApp} from '../auth/pages';

const router = createBrowserRouter([
    {
        path:'/',
        element:<HeroesApp/>,
        children:[
            {
                path:'marvel',
                element:<Marvel/>
            },
            {
                path:'dc',
                element:<DC/>
            },
            {
                path:'hero/:heroId',
                element:<Heroe/>
            },
            {
                path:'search',
                element:<Search/>
            }, 
            {
                path:"*",
                element:<Navigate to='/' />
            },
            {
                path:'login',
                element:<LoginApp/>
            }
        ]
    }
])

export const RouterApp = () => {
  return (
    <RouterProvider router={router} />
  )
}
