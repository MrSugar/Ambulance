import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 📜 Компонент для автоматической прокрутки к верху страницы при переходе
import ScrollToTop from "./components/ScrollToTop";

// 📄 Импорт страниц
import About from "./pages/About";
import News from "./pages/news";
import Licenses from "./pages/Licenses";
import Gallery from "./pages/Gallery";
import Jobs from "./pages/Jobs";
import Government from "./pages/Government";
import Contacts from "./pages/Contacts";

// 🧩 Импорт компонентов интерфейса
import Header from "./components/header";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css"; // 🎨 Общие стили

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 🔝 Прокрутка вверх при переходах */}
      <div className="container">
        <Header /> {/* 🧠 Шапка сайта */}

        <main className="main">
          <Routes>
            {/* 🛤️ Настройка маршрутов */}
            <Route path="/" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/government" element={<Government />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <Footer /> {/* 🔚 Подвал сайта */}
      </div>
    </Router>
  );
}

export default App;
