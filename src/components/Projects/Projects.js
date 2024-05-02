import React from 'react'
import './Projects.css'
import p1 from '../../images/Screenshot 2024-05-02 at 2.09.33 PM.png'
import p2 from '../../images/Screenshot 2024-05-02 at 2.09.58 PM.png'
import p3 from '../../images/Screenshot 2024-05-02 at 2.10.31 PM.png'

function Projects() {
  return (
    <div className='Projects' id='projects'>
      <div className='Projects__container'>
        <div className='projects__left' data-aos='fade-right'>
          <p className='projects__left__title'>Projects</p>
          <p className='projects__left__subtitle'>Perfect solutions for digital experience</p>
          <img src={p1} className='projects__img' alt='p1' onClick={() => window.open('https://flix-5c13f.web.app/', '_blank')} />
          <button
            className='projects__btn'
            onClick={() => window.open('https://github.com/dakom0', '_blank')}
          >
            All projects
          </button>
          {/* <p className='projects__left__extra'>
            Some projects not allow publish by NDA, if you want to see more,{' '}
            <a href='#contact'>contact</a>
          </p> */}
        </div>
        <div
          className='projects__right'
          data-aos='flip-right'
          data-aos-duration='1000'
          data-aos-delay='500'
        >
          <img src={p2} alt='p2' className='projects__img' onClick={() => window.open('https://amazin-3676a.web.app/', '_blank')} />
          <img src={p3} alt='p3' className='projects__img' onClick={() => window.open('https://house-marketplace-c8a36.web.app/', '_blank')} />
        </div>
      </div>
    </div>
  )
}

export default Projects
