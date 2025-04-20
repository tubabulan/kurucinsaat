import React from "react";
import { FaBuilding, FaExchangeAlt, FaHammer, FaDraftingCompass } from "react-icons/fa";
import "./Hizmetlerimiz.css"; // varsa stil dosyan

function Hizmetlerimiz() {
    return (
        <section className="home-section hizmetler">
            <div className="home-content">
                <h1>Hizmetlerimiz</h1>
                <hr />
                <ul className="service-list">
                    <li><FaBuilding size={22} /> Anahtar Teslim Projeler</li>
                    <li><FaExchangeAlt size={22} /> Kat Karşılığı İnşaat</li>
                    <li><FaHammer size={22} /> Tadilat ve Yenileme</li>
                    <li><FaDraftingCompass size={22} /> Mimari & Proje Danışmanlığı</li>
                </ul>

            </div>
        </section>
    );
}

export default Hizmetlerimiz;
