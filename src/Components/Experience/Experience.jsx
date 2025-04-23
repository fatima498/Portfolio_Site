import React from "react";

import { BsFillPatchCheckFill } from "react-icons/bs";

import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp_container">
        <div className="exp_frontend">
          <h3>Front-End Development</h3>
          <div className="exp_content">


            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>JS</h4>
              </div>
            </article>


            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>GSAP</h4>
              </div>
            </article>


          </div>
        </div>

        <div className="exp_frontend">
          <h3>Front-End Development</h3>


          <div className="exp_content">

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>ReactJS</h4>
              </div>
            </article>


            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>ReactTS</h4>
              </div>
            </article>

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>ChakraUI</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
