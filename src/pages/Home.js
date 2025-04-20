import React, { forwardRef } from "react";
import "./Home.css";
import { FaBuilding, FaExchangeAlt, FaHammer, FaDraftingCompass } from "react-icons/fa";

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {/* HEADER */}
      <header className="header">
        <div className="logo-left">
          <h1>KURUÇ</h1>
          <hr />
          <hr />
          <h2>İNŞAAT</h2>
        </div>
        <nav className="nav-right">
          <a href="#">ANASAYFA</a>
          <a href="#hakkimizda">HAKKIMIZDA</a>
          <a href="#projeler">PROJELER</a>
          <a href="#hizmetlerimiz">HİZMETLERİMİZ</a>
          <a href="#iletisim">İLETİŞİM</a>
          

        </nav>
      </header>

      {/* AÇIKLAMA */}
      <section className="home-section">
        <div className="home-content">
          <h1>Hayalinizdeki Yapıları Gerçeğe Dönüştürüyoruz</h1>
          <hr />
          <p>
            İstanbul merkezli KURUÇ İnşaat olarak; modern, güvenli ve kaliteli yapılar
            inşa ediyor, müşteri memnuniyetini her şeyin önünde tutuyoruz.
          </p>
          <p>
            Her projemizde teknik uzmanlık, estetik ve sürdürülebilirlik ön planda.
          </p>
        </div>
      </section>

    </div>
  );
});

export default Home;
