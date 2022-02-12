/* **************** Imports **************** */
import React from 'react'
import Image from '../components/Image'
import getImage from '../utilities/functions/getImage'

/* **************** Variables **************** */
const homeImage = getImage('img-1')

/* **************** Functions **************** */
const Home = ({ name, job, date }) => {
  return (
    <>
      <div className='home-title'>
        <h2>Hi, I'm {name}</h2>
      </div>
      <div className='subtitle'>
        <p>I'm a {job}</p>
      </div>
      <div className='date'>
        <p>{date}</p>
      </div>
      <div className='home-content'>
        <ul className='home-list'>
          <li>
            I'm a full-stack developer with a passion for creating beautiful and
            intuitive user experiences.
          </li>
          <li>
            I'm a fast learner and a team player. I'm always looking for new
            challenges and opportunities to grow as a developer.
          </li>
          <li>
            I'm a problem solver and a team player. I'm always looking for new
            challenges and opportunities to grow as a developer.
          </li>
        </ul>
        <Image src={homeImage} alt='image1' className='home-image' />
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default Home
