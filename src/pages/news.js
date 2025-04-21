import React from "react";
import { motion } from "framer-motion";
import "./news.css"; // Создай этот файл рядом с News.js

const News = () => {
  const newsItems = [
    {
      title: "Открытие новой подстанции",
      text: "В районе Восток открылась новая подстанция скорой помощи.",
      link: "#",
    },
    {
      title: "Обновление автопарка",
      text: "Закуплено 5 новых машин скорой помощи с современным оборудованием.",
      link: "#",
    },
    {
      title: "Обучение персонала",
      text: "Медики прошли тренинг по оказанию первой помощи при ДТП.",
      link: "#",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="page-content"
    >
      <h2>Новости</h2>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.link}>Подробнее</a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default News;
