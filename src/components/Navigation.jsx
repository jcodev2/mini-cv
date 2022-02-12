/* **************** Imports **************** */
import React from 'react'
import { NavLink } from 'react-router-dom'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Navigation = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar-item'>
        Jeancarlo
      </NavLink>
      <NavLink to='/about' className='navbar-item'>
        About
      </NavLink>
      <NavLink to='/cuker' className='navbar-item'>
        Cuker
      </NavLink>
    </nav>
  )
}

/* **************** Code Execution **************** */
export default Navigation
