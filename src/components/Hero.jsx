import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import '../css/hero.css'

const Hero = (p) => {
  const [join, setJoin] = useState(false);

  const HandleJoinClick = () => {
    setJoin(!join);
  }

  return (
    <div className='hero-main mb-3'>
      {p.windowSize < 768 && <>
        <img className='queried-back' src="/images/backarrow.svg" alt="back-arrow" />
        <div className='queried-div'>
          {!join ? <Button className='queried-btn' variant="primary" onClick={HandleJoinClick} > Join Group</Button> : <Button className='queried-btn' variant="primary" onClick={HandleJoinClick} >Leave Group</Button>}
        </div>        
      </>}
      <img id='banner' width="100%" src={`/images/${p.windowSize >= 768 ? 'hero_banner' : 'banner_resp'}.png`} alt="banner" />
      <div className='hero-text'>
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  )
}

export default Hero;
