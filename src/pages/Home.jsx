import React from 'react'
import Title from '../components/Title'

const Home = () => {
  return (
    <div className='home'> 
      <div className='homeAboutUs'>
        <Title>About Us</Title>
        <div className='homeAboutUsText'>Lorem Ipsum etc etc...</div>
      </div>
      <div className='homePoster'></div>
    </div>
  )
}

export default Home