import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

import './Footer.css'
const Footer = () => {
  return (
   <footer>
    <a href="#home" className='footer_logo'>Fatima</a>
    <ul className='links'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#project">Projects</a></li>
    </ul>

    <div className="footer_social">
      <a href=""><BsGithub/></a>
      <a href="">< BsMedium /></a>
      <a href="">< BsLinkedin /></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Fatima. All Rights Reserved</small>
    </div>
   </footer>
  )
}

export default Footer