import Hero from "./Components/hero/Hero";
import Beranda from "./Components/beranda/Beranda";
import Akun from "./Components/akun/Akun";
import Kontak from "./Components/kontak/Kontak";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" index element={<Hero />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </div>
  );
}

export default App;
