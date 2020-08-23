import React, { Component } from "react";
import { motion } from "framer-motion";

class Skills extends Component {
  render() {
    return (
      <div id="skills-container">
        <motion.h1
          id="skills-title"
          initial={{ x: -100, opacity: -10 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>
        <motion.div
          id="skills-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="tile is-ancestor"
            initial={{ x: 50, opacity: -1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="tile is-parent">
              <div className="tile is-child box">
                <h3 className="skill-name">HTML</h3>
                <progress
                  className="progress is-small is-black"
                  value="75"
                  max="100"
                ></progress>
                <h3 className="skill-name">CSS</h3>
                <progress
                  className="progress is-small is-black"
                  value="60"
                  max="100"
                ></progress>
                <h3 className="skill-name">Sass</h3>
                <progress
                  className="progress is-small is-black"
                  value="10"
                  max="100"
                ></progress>
                <h3 className="skill-name">JavaScript</h3>
                <progress
                  className="progress is-small is-black"
                  value="70"
                  max="100"
                ></progress>
                <h3 className="skill-name">Node.js</h3>
                <progress
                  className="progress is-small is-black"
                  value="20"
                  max="100"
                ></progress>
                <h3 className="skill-name">Express</h3>
                <progress
                  className="progress is-small is-black"
                  value="20"
                  max="100"
                ></progress>
                <h3 className="skill-name">React.js</h3>
                <progress
                  className="progress is-small is-black"
                  value="60"
                  max="100"
                ></progress>
                <h3 className="skill-name">Java</h3>
                <progress
                  className="progress is-small is-black"
                  value="65"
                  max="100"
                ></progress>
                <h3 className="skill-name">MySQL</h3>
                <progress
                  className="progress is-small is-black"
                  value="30"
                  max="100"
                ></progress>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
}

export default Skills;
