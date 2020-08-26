import React, { Component } from "react";
import { motion } from "framer-motion";

class About extends Component {
  render() {
    return (
      <div id="about-container">
        <motion.h1
          id="about-title"
          initial={{ x: -100, opacity: -10 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About me
        </motion.h1>
        <motion.div
          id="about-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            id="selfie"
            initial={{ x: 50, opacity: -1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <img
              src={require("../img/profile.jpg")}
              alt="selfie"
              style={{ borderRadius: 200 }}
            />
          </motion.div>
          <br />
          <motion.div
            id="about-me-intro"
            initial={{ x: 50, opacity: -1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p>
              I'm a <span className="highlight"> junior full-stack web developer</span>{" "}
              with a passion for designing and building user-friendly and responsive web applications and websites.
              <br /> In addition to programming as a hobby, I signed up for and
              graduated from the intensive on-site full-stack developer bootcamp
              organized by{" "}
              <span className="highlight">Code For All_The Netherlands</span>,
              the Dutch branch from the succesful Portuguese organization{" "}
              <span className="highlight">Academia de Codigo</span>.<br /> Not
              only did I got to program and learn a lot of new techniques, but I
              also focused on improving my softskills a lot too.
              <br /><br />
              I'm experienced in HTML, CSS and JavaScript and develop a lot with React.js whereas this portfolio website is also created with React.js. 
              I also have experience in programming with Java and have basic knowledge of SQL and data modelling with MySQL Workbench. For a complete overview of my skill-levels, please take a look at the 'skills'-section.
              <br />I speak fluently <span className="highlight">Dutch</span>,
              and have excellent skills in both writing and speaking{" "}
              <span className="highlight">English</span>.
              <br />
              If there's anything else you would like to know or if you would like to reach out to me, please use the contact
              form by clicking on 'contact' in the navigation bar up top.
              <br /> <br />
              <span className="highlight">
              At the moment, I'm available for any junior full-stack or front-end developer position.
              </span>
            </p>
          </motion.div>
          {/* <motion.div
					id="arrow-down-container"
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 40, opacity: 0.7 }}
          transition={{ yoyo: Infinity, duration: 0.8, delay: 3.2 }}
        >
          <img
            id="arrow-down"
            src={require("../img/scroll-down-icon-png-28.png")}
            alt="arrow-down"
          ></img>
        </motion.div> */}
        </motion.div>
      </div>
    );
  }
}

export default About;
