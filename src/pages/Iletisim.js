import React from "react";
import "./Iletisim.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";



function Iletisim() {
  return (
    <div className="iletisim-wrapper">
      <div className="harita-kapsayici">
        <iframe
          title="Kuruç İnşaat Harita"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8948039048532!2d28.898085100000017!3d41.049429500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba839adf8a0d%3A0x2f8458de73d4dea9!2sKocatepe%2C%2032.%20Sk.%20No%3A10%2C%2034045%20Bayrampa%C5%9Fa%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1744492545699!5m2!1str!2str"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>


      <div className="iletisim-flex">
        <div className="iletisim-sol">
          <h2>İletişim Bilgileri</h2>
          <h4>KURUÇ İNŞAAT VE SAN.TİC.LTD.ŞTİ.</h4>
          <p><FaMapMarkerAlt /> Kocatepe Mah. 32. Sokak No:10 Bayrampaşa / İstanbul</p>
          <p><FaPhone /> <a href="tel:+902126400908">+90 212 640 09 08</a></p>
          <p><FaEnvelope /> <a href="mailto:info@kurucinsaat.com">info@kurucinsaat.com</a></p>
        </div>

        <div className="iletisim-sag">
          <h4>İrtibat Kişisi</h4>
          <p><strong>İsim:</strong> İshak BULAN</p>
          <p><strong>Telefon:</strong> <a href="tel:+905323201819">+90 532 320 18 19</a></p>
        </div>
      </div>

    </div>
  );
}

export default Iletisim;
