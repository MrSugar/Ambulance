import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>О нас</NavLink>
      <NavLink to="/news">Новости</NavLink>
      <NavLink to="/licenses">Лицензии</NavLink>
      <NavLink to="/gallery">Галерея</NavLink>
      <NavLink to="/jobs">Вакансии</NavLink>
      <NavLink to="/government">Гос закупки</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
    </nav>
  );
}

export default Navbar;
