import React, { Component } from "react";
import { motion } from "framer-motion";

class Footer extends Component {
  render() {
    return (
      <motion.footer
        id="footer-container"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div id="options-container">

        </div>
        <div id="social-container">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/wesley-kater-27949014b/"
            className="fab fa-linkedin"
            rel="noopener noreferrer"
          > </a>
          <a
            target="_blank"
            href="https://github.com/Katert"
            className="fab fa-github-square"
            rel="noopener noreferrer"
          > </a>
        </div>
      </motion.footer>
    );
  }
}

export default Footer;
