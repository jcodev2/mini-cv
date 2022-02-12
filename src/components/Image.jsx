/* **************** Imports **************** */
import React from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Image = ({ src, alt, className }) => {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  )
}

/* **************** Code Execution **************** */
export default Image
