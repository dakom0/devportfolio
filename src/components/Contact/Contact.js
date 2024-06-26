import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'

function Contact() {
  return (
    <div className='Contact' id='contact'>
      <div className='Contact__container'>
        <div className='contact__left'>
          <p className='contact__left__desc'>Let's make something amazing together</p>
          {/* <p className="contact__left__connect">
            Start by <span>saying hi</span>
          </p> */}
        </div>
        <div className='contact__right'>
          <p className='contact__right__title'>Information</p>
          <p className='contact__right__address'>Bowie, Maryland</p>
          <p className='contact__right__address'>Phone: 571-430-9959</p>
          <p className='contact__right__email'>damik94@gmail.com</p>
          <ul className='contact__right__ul'>
            <li className='contact__right__links'>
              <a href='#home'>Home</a>
            </li>
            <li className='contact__right__links'>
              <a href='#about'>About</a>
            </li>
            <li className='contact__right__links'>
              <a href='#projects'>Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
