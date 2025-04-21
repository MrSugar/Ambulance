import React from "react";
import { motion } from "framer-motion";

const Jobs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-content"
    >
      <h2>Вакансии</h2>
      <p>Здесь вы можете найти информацию о текущих вакансиях и требованиях к кандидатам.</p>
    </motion.div>
  );
};

export default Jobs;
