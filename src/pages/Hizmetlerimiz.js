import React from "react";
import { FaBuilding, FaExchangeAlt, FaHammer, FaDraftingCompass } from "react-icons/fa";
import "./Hizmetlerimiz.css";

function Hizmetlerimiz() {
    return (
        <section className="home-section hizmetler">
            <div className="home-content">
                <h1>Hizmetlerimiz</h1>
                <hr />
                <div className="service-grid">
                    <div className="service-card">
                        <FaBuilding />
                        <h3>Anahtar Teslim Projeler</h3>
                        <p>Başlangıçtan teslimata kadar tüm süreçleri sizin için yönetiyoruz.</p>
                    </div>
                    <div className="service-card">
                        <FaExchangeAlt />
                        <h3>Kat Karşılığı İnşaat</h3>
                        <p>Arsanıza en uygun projeyi geliştirip maksimum değer sağlıyoruz.</p>
                    </div>
                    <div className="service-card">
                        <FaHammer />
                        <h3>Tadilat ve Yenileme</h3>
                        <p>Mevcut yapılarınızı modern standartlara uygun şekilde yeniliyoruz.</p>
                    </div>
                    <div className="service-card">
                        <FaDraftingCompass />
                        <h3>Mimari & Proje Danışmanlığı</h3>
                        <p>Uzman mimar ve mühendis kadromuzla proje desteği sunuyoruz.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hizmetlerimiz;
