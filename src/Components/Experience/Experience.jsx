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
                <small className="text_light">Experience</small>
              </div>
            </article>

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>CSS</h4>
                <small className="text_light">Experience</small>
              </div>
            </article>

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text_light">Experience</small>
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
                <h4>Tailwind</h4>
                <small className="text_light">Experience</small>
              </div>
            </article>

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>ReactJS</h4>
                <small className="text_light">Experience</small>
              </div>
            </article>

            <article className="exp_detail">
              <BsFillPatchCheckFill className="exp_icons" />
              <div>
                <h4>ChakraUI</h4>
                <small className="text_light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
