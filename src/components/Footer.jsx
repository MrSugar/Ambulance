import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} КГП на ПХВ "Областная станция скорой медицинской помощи" УЗ ОА. Все права защищены.</p>
      <p>📍 г. Семей, ул. Орманды 32/1</p>
      <p>📞 +7 (2222) 23-45-67 | ✉ 03.semey@mail.kz</p>
    </footer>
  );
}

export default Footer;
