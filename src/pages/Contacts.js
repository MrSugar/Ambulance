import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-content"
    >
      <h2>Контакты</h2>
      <p>Свяжитесь с нами: адрес, телефон, email и карта.</p>
    </motion.div>
  );
};

export default Contacts;
