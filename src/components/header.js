import React from "react";
import Navbar from "./Navbar"; // ✅ импортируем меню

const Header = () => {
  return (
    <header className="header">
      <h1 className="site-title">🚑 КГП на ПХВ "Областная станция скорой медицинской помощи" УЗ ОА</h1>
      <p className="site-subtitle">Мы рядом, когда это важно</p>
      <Navbar /> {/* 🧭 меню ВНУТРИ шапки */}
    </header>
  );
};

export default Header;
