import React, { Component } from "react";
import { motion } from "framer-motion";

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <div id="bg-container">
          <motion.div
            id="bg-1"
            initial={{ y: 2000, opacity: -5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4 }}
          ></motion.div>
          <motion.div
            id="bg-2"
            initial={{ x: 2000, opacity: -5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5 }}
          ></motion.div>
        </div>
        <div id="greeting-container">
        <motion.div
          id="greeting"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Hi, my name is{" "}
          <span style={{ color: "whitesmoke", textDecoration: "underline" }}>
            Wesley Kater
          </span>
          .
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: -5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <span id="greeting-intro">
            I'm a{" "}
            <span style={{ color: "whitesmoke", textDecoration: "underline" }}>
              full-stack
            </span>{" "}
            web developer.
          </span>
        </motion.div>
        </div>
        <motion.div
          id="arrow-down-container"
          initial={{ y: 322, opacity: 0 }}
          animate={{ y: 330, opacity: 0.7 }}
          transition={{ yoyo: Infinity, duration: 0.8, delay: 4.5 }}
        >
          {/* <img
            id="arrow-down"
            src={require("../img/scroll-down-icon-png-28.png")}
            alt="arrow-down"
          ></img> */}
        </motion.div>
      </div>
    );
  }
}

export default Home;
