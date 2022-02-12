/* **************** Imports **************** */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Cuker from '../pages/Cuker'
import Home from '../pages/Home'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Redirection = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home
            name='Jeancarlo'
            job={'Frontend Developer'}
            date={'February 2021 - Present'}
          />
        }
      />
      <Route
        path='/about'
        element={
          <About
            work={'Google'}
            place={'New York'}
            birthday={'March 02, 1996'}
          />
        }
      />
      <Route
        path='/cuker'
        element={
          <Cuker
            contact={{
              name: 'Jeancarlo',
              email: 'jcode2006@gmail.com',
              phone: '+1 (917) 754-9076'
            }}
            payment={'PayPal'}
            location={'New York'}
          />
        }
      />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

/* **************** Code Execution **************** */
export default Redirection
