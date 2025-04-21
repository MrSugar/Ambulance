import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-content"
    >
      <h2>Галерея</h2>
      <p>Фото и видео с мероприятий и повседневной работы скорой помощи.</p>
    </motion.div>
  );
};

export default Gallery;
