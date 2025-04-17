import React from "react";
import { motion } from "framer-motion";

const Licenses = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="page-content"
    >
    <div>
      <h2>Лицензии</h2>
      <p>Наша служба скорой помощи работает на основании следующих лицензий:</p>
      <ul>
        <li>Лицензия на осуществление медицинской деятельности № 123456 от 01.01.2020</li>
        <li>Лицензия на перевозку пациентов специализированным транспортом № 654321 от 15.03.2021</li>
      </ul>
      <p>Все лицензии соответствуют требованиям Министерства здравоохранения РК и регулярно обновляются.</p>
    </div>
    </motion.div>
  );
}

export default Licenses;
