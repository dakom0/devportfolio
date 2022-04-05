/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import twitter from '../../images/twitter-brands.png'
import github from '../../images/github-brands.png'
import facebook from '../../images/facebook-f-brands.png'
import dribbble from '../../images/dribbble-brands.png'
import instagram from '../../images/instagram-brands.png'

function Footer() {
  return (
    <div className='Footer'>
      <div className='footer__rights'>
        <p className='footer__name'>
          <span>Dami</span> Komolafe
        </p>
        <p className='footer__copyrights'>© All Rights Reserved 2022</p>
      </div>
      {/* <div className='footer__socials'>
        <img src={twitter} alt='twitter' className='footer__social__icons' />
        <img src={github} alt='github' className='footer__social__icons' />
        <img src={facebook} alt='facebook' className='footer__social__icons' />
        <img src={dribbble} alt='dribbble' className='footer__social__icons' />
        <img src={instagram} alt='instagram' className='footer__social__icons' />
      </div> */}
    </div>
  )
}

export default Footer
