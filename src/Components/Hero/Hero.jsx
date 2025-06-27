import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt='' />
        <h1><span>I'm Anadi mishra </span>, fullsatack developer based on India.</h1>
        <p>I am a fullsatack developer from delhi,India withd 5 years of development</p>
        <div className="hero-action">
            <div className="hero-connect">connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero