import React from "react";
import "./Header.css"; // подключим, если хочешь вынести стили отдельно

const Header = () => {
  return (
    <header className="header">
      <h1 className="site-title">🚑 Скорая помощь</h1>
      <p className="site-subtitle">Мы рядом, когда это важно</p>
    </header>
  );
};

export default Header;
