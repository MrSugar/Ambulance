import React from "react";
import { motion } from "framer-motion"; // импортируем motion

const About = () => {
  return (
    // motion.div — это как обычный <div>, но с анимацией
    <motion.div
      initial={{ opacity: 0, y: 30 }} // начальное состояние: прозрачный и чуть ниже
      animate={{ opacity: 1, y: 0 }}  // финальное состояние: видимый и на месте
      transition={{ duration: 0.6 }}  // длительность анимации
      className="page-content"
    >
      <h2>О нас</h2>
      <p>
        Добро пожаловать на сайт скорой помощи. Мы предоставляем экстренные медицинские услуги 24/7. Наша команда профессионалов готова прийти на помощь в любую минуту.
      </p>
    </motion.div>
  );
};

export default About;
