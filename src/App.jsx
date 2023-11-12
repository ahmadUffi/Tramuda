import Hero from "./Components/hero/Hero";
import Beranda from "./Components/beranda/Beranda";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/beranda" element={<Beranda />} />
      </Routes>
    </div>
  );
}

export default App;
