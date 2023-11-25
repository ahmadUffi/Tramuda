import Register from "./Components/auth/register/register";
import Login from "./Components/auth/login/login";
import Hero from "./Components/hero/Hero";
import Beranda from "./Components/beranda/Beranda";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/register" index element={<Register />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/" index element={<Hero />} />
        <Route path="/beranda" element={<Beranda />} />
      </Routes>
    </div>
  );
}

export default App;
