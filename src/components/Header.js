import React, { Component } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <motion.div
        className="header-container"
        initial={{ y: 100, opacity: -3 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link className="header-link" to="/">
          home
        </Link>
        <Link className="header-link" to="/about">
          about me
        </Link>
        <Link className="header-link" to="/skills">
          skills
        </Link>
        <Link className="header-link" to="/work">
          work
        </Link>
        <Link className="header-link" to="/contact">
          contact
        </Link>
      </motion.div>
    );
  }
}

export default Header;
