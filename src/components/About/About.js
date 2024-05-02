import React from 'react'
import './About.css'
import design from '../../images/bezier-curve-solid.png'
import code from '../../images/code-solid.png'
import target from '../../images/crosshairs-solid.png'

function About() {
  return (
    <div className='About' id='about'>
      <div className='about__left'>
        <div className='about__cards'>
          <div className='about__card' data-aos='fade-right' data-aos-duration='1000'>
            <div className='card__top'>
              <p className='card__title'>Design</p>
              <img src={design} className='card__icon' alt='' />
            </div>
            <p className='card__desc'>Create products with unique ideas</p>
          </div>
          <div className='about__card' data-aos='fade-right' data-aos-duration='1000'>
            <div className='card__top'>
              <p className='card__title'>Front-End</p>
              <img src={code} className='card__icon' alt='' />
            </div>
            <p className='card__desc'>I develop front-end with coding super smooth applications</p>
          </div>
          <div className='about__card' data-aos='fade-right' data-aos-duration='1000'>
            <div className='card__top'>
              <p className='card__title'>Hardware</p>
              <img src={target} className='card__icon' alt='' />
            </div>
            <p className='card__desc'>Boost your business with optimal devices</p>
            <p className='card__link'>Network & Electrical tecnician</p>
          </div>
        </div>
      </div>
      <div className='about__right'>
        <p className='about__subtitle'>Introduction</p>
        <p className='about__title'>Hello! I'm Dami</p>
        <p className='about__info'>Every great design begin with an even better story</p>
        <p className='about__desc'>
          Since beginning of my journey as a developer over 3 years ago, I've done remote
          work for agencies, and collaborated with talented people to create digital products for
          both business and consumer use. I'm quietly confident, naturally curious, and perpetually
          working on improving my work one step at a time.
        </p>
      </div>
    </div>
  )
}

export default About
