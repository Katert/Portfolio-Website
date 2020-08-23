import React, { Component } from "react";
import { motion } from "framer-motion";

class Work extends Component {
  render() {
    return (
      <div id="work-container">
        <motion.h1
          id="work-title"
          initial={{ x: -100, opacity: -10 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Work
        </motion.h1>
        <motion.div
          id="work-section"
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
                <motion.h3
                  className="project-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                >
                  COVID-19 Tracker (WIP)
                </motion.h3>
                <motion.div
                  className="project-thumbnail"
                  initial={{ x: 50, opacity: -1 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  <img
                    src={require("../img/covid-19-thumb.png")}
                    alt="project-thumbnail"
                    style={{ borderRadius: 10, height: 300 }}
                  />
                </motion.div>
                <motion.p
                  className="project-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                >
                  Provides global up-to-date COVID-19 statistics.<br/><br/>
                  (Not optimized for mobile devices yet)
                </motion.p>

                <motion.div
                  className="project-buttons-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                >
                  <span className="project-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://katert.github.io/covid19-tracker/#"
                      className="button is-black"
                    >
                      View
                    </a>
                  </span>
                  <span className="project-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Katert/covid19-tracker"
                      className="button is-black"
                    >
                      Github
                    </a>
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="tile is-parent">
              <div className="tile is-child box"></div>
            </div>

            <div className="tile is-parent">
              <div className="tile is-child box"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
}

export default Work;
