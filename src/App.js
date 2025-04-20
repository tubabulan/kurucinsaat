import React, { useRef } from "react";

import Home from "./pages/Home";
import Hakkimizda from "./pages/Hakkimizda";
import Projeler from "./pages/Projeler";
import Iletisim from "./pages/Iletisim";
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import Footer from "./components/Footer";

function App() {
  // Ref'leri tanımlıyoruz
  const homeRef = useRef(null);
  const hakkimizdaRef = useRef(null);
  const projelerRef = useRef(null);
  const iletisimRef = useRef(null);
  const hizmetlerimizRef = useRef(null);

  return (
    <>
      {/* Ref ile Scroll yapılabilir bölümler */}
      <Home ref={homeRef} />       
      <div id="hakkimizda" ref={hakkimizdaRef}><Hakkimizda /></div>
      <div id="hizmetlerimiz" ref={hizmetlerimizRef}><Hizmetlerimiz /></div>
    
      <div id="projeler" ref={projelerRef}><Projeler /></div>
      
      <div id="iletisim" ref={iletisimRef}><Iletisim /></div>
        <Footer />
    </>
  );
}

export default App;