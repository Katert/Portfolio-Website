import React, { Component } from "react";
import { motion } from "framer-motion";

class Header extends Component {
  render() {
    return (
      <motion.div
        className="header-container"
        initial={{ y: 100, opacity: -3 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a className="header-link" href="/">
          home
        </a>
        <a className="header-link" href="/about">
          about me
        </a>
        <a className="header-link" href="/skills">
          skills
        </a>
        <a className="header-link" href="/work">
          work
        </a>
        <a className="header-link" href="/contact">
          contact
        </a>
      </motion.div>
    );
  }
}

export default Header;
