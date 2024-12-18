import React from 'react'
import  { useState } from "react"; // Import useState from React
import { AiOutlineFacebook } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Home.css'

const Home = () => {


  
    const [active, setActive] = useState('#');

  return (
    <header id='home'>
      <div className="container home_container">
        <h5>Hello I'm </h5>
        <h1>Fatima</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <div className="cta">
          <a href="" download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary' >Contact Me</a>
        </div>
        <div className="social_icons">
        <a 
        href="#facebook"
        onClick={() => setActive('#facebook')}
        className={active === '#facebook' ? 'active' : ''}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer"
      >
        <AiOutlineFacebook />
      </a>
      <a 
        href="#linkedin"
        onClick={() => setActive('#linkedin')}
        className={active === '#linkedin' ? 'active' : ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a 
        href="#github"
        onClick={() => setActive('#github')}
        className={active === '#github' ? 'active' : ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    
        </div>
        <div className="me">
        <img src="/images/img.webp" alt="me" />

        </div>

<a href="/contact" className='scroll-down'></a>

      </div>
    </header>
  )
}

export default Home