import React from "react";
import "./Project.css";
const Project = () => {
  return (
    <section id="projects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container proj_container">
        <article className="project_items">
          <div className="project_item_img">
            <img src="https://plus.unsplash.com/premium_photo-1674374443275-20dae04975ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D" />
          </div>
          <h3>Game Project</h3>
          <small className="text-light">React, TypeScript Chakra UI</small>
          <div className="project_item_btn">
            <a
              href="https://github.com/Zilly706/updated_game_project"
              class="btn"
            >
              GitHub
            </a>
            <a href="https://updated-game-project.vercel.app/" class="btn">
              Live
            </a>
          </div>
        </article>

        <article className="project_items">
          <div className="project_item_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmwmWXUFdp99UcpCtuMPN8cuOsueZdm1l6USd6S2mtJT5AVWb7q2GR1N4G0L6IONVwuE&usqp=CAU" />
          </div>
          <h3>BMI_Calculator</h3>
          <small className="text-light"> React, TypeScript, and CSS </small>
          <div className="project_item_btn">
            <a href="https://github.com/Zilly706/BMI_Calculator" class="btn">
              GitHub
            </a>
            <a href="https://bmi-calculator-six-flax.vercel.app/" class="btn">
              Live
            </a>
          </div>
        </article>

        <article className="project_items">
          <div className="project_item_img">
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2023/05/website-animation-hero-image.png"
              alt="me"
            />
          </div>
          <h3>Animation Site</h3>
          <small className="text-light">JavaScript, CSS and GSAP</small>
          <div className="project_item_btn">
            <a href="https://github.com/fatima498/Animation-Site" class="btn">
              GitHub
            </a>
            <a href="https://animation-site-nru6.vercel.app/" class="btn">
              Live
            </a>
          </div>
        </article>

        <article className="project_items">
          <div className="project_item_img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThh_4nLf966NZlJfNQtKnwU2d6saUtEG_XaA&s"
              alt="me"
            />
          </div>
          <h3>Dripple Site</h3>
          <small className="text-light">HTML and CSS</small>
          <div className="project_item_btn">
            <a href="https://github.com/fatima498/Drriple-Site" class="btn">
              GitHub
            </a>
            <a href="https://drriple-site-7h27.vercel.app/" class="btn">
              Live
            </a>
          </div>
        </article>

        <article className="project_items">
          <div className="project_item_img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Badshahi_Mosque_front_picture.jpg"
              alt="me"
            />
          </div>
          <h3>Beautiful Places</h3>
          <small className="text-light">HTML and CSS</small>
          <div className="project_item_btn">
            <a
              href="https://github.com/fatima498/responsive-design2"
              class="btn"
            >
              GitHub
            </a>
            <a href="https://responsive-design2.vercel.app/" class="btn">
              Live
            </a>
          </div>
        </article>

        <article className="project_items">
          <div className="project_item_img">
            <img
              src="https://img.freepik.com/free-photo/bowl-mozzarella-balls-with-tomato-sauce-garlic-pasta-turquoise-background_23-2147922791.jpg"
              alt="me"
            />
          </div>
          <h3>Food App</h3>
          <small className="text-light"> HTML5, CSS and JavaScript</small>
          <div className="project_item_btn">
            <a href="https://food-app-eta-amber.vercel.app/" class="btn">
              Live
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
