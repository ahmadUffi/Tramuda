import Hero from "./Components/hero/Hero";
import Beranda from "./Components/beranda/Beranda";
import Akun from "./Components/akun/Akun";
import Kontak from "./Components/kontak/Kontak";
import { Route, Routes } from "react-router-dom";
import Artikel from "./Components/artikel/Artikel";
import Navbar from "./Components/Utility/navbar/Navbar";
import Footer from "./Components/Utility/footer/Footer";
import Rebab from "./assets/Rebab";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Hero />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/three" element={<Rebab />} />
        <Route path="/beranda/:artikel" element={<Artikel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
