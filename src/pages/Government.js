import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="page-content"
    >
      <h2>Гос закупки</h2>
      <p></p>
    </motion.div>
  );
};

export default About;
