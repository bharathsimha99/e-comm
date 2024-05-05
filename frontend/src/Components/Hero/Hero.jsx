import React from 'react'
import './Hero.css'
import hands_icon from '../Assests/hand.png'
import arrow from '../Assests/arrow.png'
import hero from '../Assests/product_1.png'
//import hero from '../Assests/hero.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hands_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img width={40} src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
    <img width={400} src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero
