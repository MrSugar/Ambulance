import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Скорая помощь. Все права защищены.</p>
      <p>📍 г. Примерск, ул. Здоровья, 24</p>
      <p>📞 +7 (900) 123-45-67 | ✉ info@ambulance.ru</p>
    </footer>
  );
}

export default Footer;
