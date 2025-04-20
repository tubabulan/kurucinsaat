import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return ( 
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          
        </div>

        <div className="footer-menu">
          <h4>Menü</h4>
          <ul>
            <li><a href="#home">Anasayfa</a></li>
            <li><a href="#hakkimizda">Hakkımızda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </div>

        <div className="footer-iletisim">
          <h4>İletişim</h4>
          <p>Kocatepe Mah. 32. Sok. No:10 Bayrampaşa / İstanbul</p>
          <p><strong>Telefon:</strong> +90 212 345 67 89</p>
          <p><strong>Email:</strong> info@kurucinsaat.com</p>
          <p><strong>Web:</strong> www.kurucinsaat.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kuruç İnşaat • Tüm hakları saklıdır.</p>
        <div className="footer-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
