import Title from "../../Components/Utility/title/Title";
import Filter from "../../Components/artikel/filter/Filter";
import Curosel from "../../Components/artikel/curosel/Curosel";
import Navbar from "../../Components/Utility/navbar/Navbar";
import Footer from "../..//Components/Utility/footer/Footer";
import "./beranda.css";

function Beranda() {
  return (
    <div className="beranda">
      <Navbar />
      <div className="title">
        <Title title1="Aku Cinta Budaya Negeri Ku" />
        <Title title2="Karena Itu Adalah Kebanggaanku" />
      </div>
      <div className="filter-container">
        <Filter filterFor="Asal Daerah" />
        {/* <Filter filterFor="Cara Memainkan" /> */}
      </div>
      <Curosel />
      <Footer />
      Hello
    </div>
  );
}

export default Beranda;
