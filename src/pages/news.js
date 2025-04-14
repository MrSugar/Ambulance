import React from "react";
import { motion } from "framer-motion";

const News = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="page-content"
    >
      <h2>Новости</h2>
      <p>Здесь будут последние новости и события нашей службы скорой помощи.</p>
    </motion.div>
  );
};

export default News;
