import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffcc00", padding: "15px", marginTop: "30px", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} КГП на ПХВ "Областная станция скорой медицинской помощи" УЗ ОА. Все права защищены.</p>
    </footer>
  );
}

export default Footer;
