import React from 'react'
import Container from './components/Container'
import Navigation from './components/Navigation'
import Redirection from './components/Redirection'

function App() {
  return (
    <>
      <Container>
        <div className='title'>
          <h1 className='text-center'>Expierence</h1>
          <span className='line text-center'></span>
        </div>
        <div className='content'>
          <Navigation />
          <div className='redirections'>
            <Redirection />
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
