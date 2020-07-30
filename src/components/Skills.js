import React, { Component } from "react";
import { motion } from "framer-motion";

class Skills extends Component {
  render() {
    return (
      <div id="skills-container">
        <motion.h1
          id="skills-title"
          initial={{ x: 100, opacity: -10 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>
        <motion.div
          id="skills-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div 
					className="tile is-ancestor"
					initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
					>
					<div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title">front-end:</p>
								<h3 className="skill-name">HTML</h3>
								<progress className="progress is-small is-black" value="75" max="100"></progress>
								<h3 className="skill-name">CSS</h3>
								<progress className="progress is-small is-black" value="70" max="100"></progress>
								<h3 className="skill-name">Sass</h3>
								<progress className="progress is-small is-black" value="20" max="100"></progress>
								<h3 className="skill-name">JavaScript</h3>
								<progress className="progress is-small is-black" value="70" max="100"></progress>
								<h3 className="skill-name">ReactJS</h3>
								<progress className="progress is-small is-black" value="60" max="100"></progress>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title">back-end:</p>
								<h3 className="skill-name">Java</h3>
								<progress className="progress is-small is-black" value="75" max="100"></progress>
								<h3 className="skill-name">Spring</h3>
								<progress className="progress is-small is-black" value="40" max="100"></progress>
								<h3 className="skill-name">Hibernate</h3>
								<progress className="progress is-small is-black" value="40" max="100"></progress>
								<h3 className="skill-name">PHP</h3>
								<progress className="progress is-small is-black" value="10" max="100"></progress>
								<h3 className="skill-name">SQL</h3>
								<progress className="progress is-small is-black" value="45" max="100"></progress>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
			
    );
  }
}

export default Skills;
