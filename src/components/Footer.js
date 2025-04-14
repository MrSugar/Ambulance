import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffcc00", padding: "15px", marginTop: "30px", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} Скорая помощь. Все права защищены.</p>
    </footer>
  );
}

export default Footer;
