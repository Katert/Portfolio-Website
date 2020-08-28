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
              src={require("../img/profile.jpeg")}
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
              Hi, my name is <span className="highlight">Wesley</span>.
              <br/>
              <br/>
              I'm from The Netherlands and I'm a{" "}
              <span className="highlight">
                {" "}
                junior full-stack web developer
              </span>{" "}
              with a desire for designing and building user-friendly and
              responsive web applications and websites.
              <br /> In addition to programming as a hobby, I signed up for and
              graduated from the intensive on-site full-stack developer bootcamp
              organized by{" "}
              <span className="highlight">Code For All_The Netherlands</span>,
              the Dutch branch from the succesful Portuguese organization{" "}
              <span className="highlight">Academia de Codigo</span>.
              <br />
              <br />
              During the bootcamp, I've focused a lot on back-end programming
              with <span className="highlight">Java</span> and front-end programming with <span className="highlight">HTML, CSS and JavaScript</span>,
              while also learning <span className="highlight">React</span> which I love developing with.
              <br />
              At the end of the bootcamp, I discovered that web development is
              really what makes me enthusiastic. I'm also very interested in learning about best
              practices regarding UI and UX-design, as I believe these are
              essential skills to have when designing applications and websites
              tailored to the needs of a client.
              <br />
              <br />
              Furthermore, I speak fluently{" "}
              <span className="highlight">Dutch</span> and have excellent skills
              in both writing and speaking{" "}
              <span className="highlight">English</span>. I'm a helpful guy and a
              critical thinker, and I believe in the power of teamwork to develop amazing things.
              <br />
              <br />
              <span className="highlight">
                At the moment, I'm available for any junior full-stack
                or front-end developer job opportunities. 
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
