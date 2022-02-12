/* **************** Imports **************** */
import React from 'react'
import Image from '../components/Image'
import getImage from '../utilities/functions/getImage'

/* **************** Variables **************** */
const homeImage = getImage('img-3')

/* **************** Functions **************** */
const Cuker = ({ contact, payment, location }) => {
  const { name, email, phone } = contact

  return (
    <>
      <div className='home-title'>
        <h2>Cuker</h2>
      </div>
      <div className='subtitle'>
        <p>You can find me at {location}</p>
      </div>
      <div className='date'>
        <p>{payment}</p>
      </div>
      <div className='home-content'>
        <ul className='home-list'>
          <li>
            <p>{name}</p>
          </li>
          <li>
            <p>{email}</p>
          </li>
          <li>
            <p>{phone}</p>
          </li>
        </ul>
        <Image src={homeImage} alt='image1' className='home-image' />
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default Cuker
