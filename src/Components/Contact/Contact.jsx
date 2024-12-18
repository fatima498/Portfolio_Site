import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <p>Youremail@gmail.com</p>
            <a href="milito:yurname@gmail.com">Send Message</a>
          </article>
          <article className="contact_option">
            < BsGithub className="contact_option_icon" />
            <h4>Github</h4>
            <p>github.com</p>
            <a href="milito:yurname@gmail.com">Open</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name"  placeholder="Your Name" required/>
          <input type="email" name="name"  placeholder="Your Email" required/>
          <textarea name="name" placeholder="Your Message" id=""></textarea>
          <button type="submit"  className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
