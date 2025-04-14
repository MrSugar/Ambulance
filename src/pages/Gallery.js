import React from "react";

function Gallery() {
  return (
    <div>
      <h2>Галерея</h2>
      <p>Здесь вы можете посмотреть фотографии нашей работы, техники и команды:</p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
        <img src="https://via.placeholder.com/200x150?text=Автомобиль+01" alt="Скорая помощь" />
        <img src="https://via.placeholder.com/200x150?text=Бригада+на+вызове" alt="Медицинская бригада" />
        <img src="https://via.placeholder.com/200x150?text=Оборудование" alt="Оборудование" />
        <img src="https://via.placeholder.com/200x150?text=Учения" alt="Учения" />
      </div>
    </div>
  );
}

export default Gallery;

