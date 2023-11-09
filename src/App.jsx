import Beranda from "./Components/beranda/Beranda";
import Hero from "./Components/hero/Hero";
import Title from "./Components/Utility/title/Title";
import Filter from "./Components/artikel/filter/Filter";
import Curosel from "./Components/artikel/curosel/Curosel";
import Navbar from "./Components/Utility/navbar/Navbar";
import Footer from "./Components/Utility/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <Beranda>
        <Title />
        <Filter />
        <Curosel />
        <Navbar />
        <Footer />
      </Beranda>
    </div>
  );
}

export default App;
