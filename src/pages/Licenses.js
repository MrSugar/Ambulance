import React from "react";
import { motion } from "framer-motion";
import "./Licenses.css"; // Не забудь создать этот файл

const Licenses = () => {
  const licenses = [
    {
      name: "Лицензия на оказание скорой помощи",
      issued: "01.03.2021",
      number: "№ A123456",
    },
    {
      name: "Лицензия на транспортировку пациентов",
      issued: "15.07.2020",
      number: "№ B654321",
    },
    {
      name: "Разрешение на использование спецсигналов",
      issued: "10.11.2019",
      number: "№ C789012",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-content"
    >
      <h2>Лицензии</h2>
      <div className="license-list">
        {licenses.map((item, index) => (
          <div key={index} className="license-card">
            <h3>{item.name}</h3>
            <p>Дата выдачи: {item.issued}</p>
            <p>Номер: {item.number}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Licenses;
