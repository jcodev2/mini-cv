/* **************** Imports **************** */
import React from 'react'
import Image from '../components/Image'
import getImage from '../utilities/functions/getImage'

/* **************** Variables **************** */
const homeImage = getImage('img-2')

/* **************** Functions **************** */
const About = ({ work, place, birthday }) => {
  return (
    <>
      <div className='home-title'>
        <h2>About</h2>
      </div>
      <div className='subtitle'>
        <p>I'm working at {work}</p>
      </div>
      <div className='date'>
        <p>My birthday is on: {birthday}</p>
      </div>
      <div className='home-content'>
        <ul className='home-list'>
          <li>My company is located in {place}</li>
        </ul>
        <Image src={homeImage} alt='image1' className='home-image' />
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default About
