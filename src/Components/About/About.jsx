import React from "react";

import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

import './About.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src="/images/img3.avif" alt="me" />
            
          </div>
        </div>
        <div className="about_content">

       <div className="about_cards">
       <article className="about_card">
            <GiGraduateCap className="about_icon" />
            <h5>Degree</h5>
            <small>
            <ul>
            <i> Maths and Computer Science</i>
           
            </ul>
            </small>
          </article>
          <article className="about_card">
            < BsTelephoneForward className="about_icon" />
            <h5>Location</h5>
            <small>
             Address...
             <li>City: ABC</li>
            </small>
          </article>

          <article className="about_card">
            <  TfiWorld  className="about_icon" />
            <h5>Contact</h5>
            <small>
            <ul>
              <li>Phone: 1234567</li>
              <li>Email: muhabdulla124
                @gmail.com</li>
            </ul>
            </small>
          </article>
       </div>

       
        <p>I'm a passionate front-end developer with intermediate knowledge in JavaScript, constantly exploring advanced topics to improve my skills. I have experience working with React.js, Chakra UI, and Tailwind CSS, building clean and responsive web applications. Let's build something amazing together!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
