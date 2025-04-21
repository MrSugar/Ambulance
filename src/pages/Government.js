import React from "react";
import { motion } from "framer-motion";

const Government = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-content"
    >
      <h2>Госслужбы</h2>
      <p>Информация о взаимодействии с государственными учреждениями и организациями.</p>
    </motion.div>
  );
};

export default Government;
