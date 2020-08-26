import React from "react";
import { motion } from "framer-motion";

const Skills = (props) => {

  let skillsArray = props.skillsData;

  const populateSkillList = () => {
    return skillsArray.map((skill) => {
      return (
        <motion.div
          className="skill-container"
          key={skill.name}
          initial={{ opacity: -10 }}
          animate={{ opacity: 1 }}
          transition={{ duration: skill.animateDuration }}
        >
          <h3 className="skill-name">{skill.name}</h3>
          <progress
            className="progress is-small is-black"
            value={skill.progress}
            max="100"
          ></progress>
        </motion.div>
      );
    });
  };

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
            <div className="tile is-child box">{populateSkillList()}</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
