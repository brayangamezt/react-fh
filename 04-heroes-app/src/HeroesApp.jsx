import React from 'react';
import {Outlet} from 'react-router-dom';
import { NavBar } from './ui/components/NavBar';

// Importando el proovider de informacion
import {AuthProvider} from './auth';

export const HeroesApp = () => {
  return (
    <AuthProvider>

      <NavBar/>
      <div className='container'>
          <Outlet/>
      </div>
      
    </AuthProvider>
  )
}
