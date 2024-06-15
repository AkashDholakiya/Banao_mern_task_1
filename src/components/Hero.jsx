import React from 'react'
import '../css/hero.css'

const Hero = () => {
  return (
    <div className='hero-main mb-3'>
      <img id='banner' width="100%" src="/images/hero_banner.png" alt="banner" />
      <div className='hero-text'>
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  )
}

export default Hero;
