import Title from "../../Components/Utility/title/Title";
import Filter from "../../Components/artikel/filter/Filter";
import Curosel from "../../Components/artikel/curosel/Curosel";
import Navbar from "../../Components/Utility/navbar/Navbar";
import Footer from "../..//Components/Utility/footer/Footer";

function Beranda() {
  return (
    <div className="beranda">
      <Title />
      <Filter />
      <Curosel />
      <Navbar />
      <Footer />
      Hello
    </div>
  );
}

export default Beranda;
