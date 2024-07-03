import React, { useContext } from 'react';
import {NavLink, Link, useNavigate} from 'react-router-dom';

import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {

    const { authState } = useContext(AuthContext);

    const navigate = useNavigate();
    const onLogOut = () =>{ navigate('/login', {replace:true}) }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-2" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">USE CONTEXT</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <NavLink className='nav-link' to='marvel' > Marvel </NavLink>

                    <NavLink className='nav-link' to='dc' > DC </NavLink>

                    <NavLink className='nav-link' to='search' > search </NavLink>

                </ul>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <span className='nav-item nav-link text-info'> Brayan </span>
                    <button className='nav-item nav-link btn' onClick={onLogOut} > LogOut </button>
                </ul>
            </div>
        </div>
    </nav>
  )
}
