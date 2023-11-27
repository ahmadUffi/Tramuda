import Title from "../../Components/Utility/title/Title";
// import Navbar from "../../Components/Utility/navbar/Navbar";
import Footer from "../..//Components/Utility/footer/Footer";
import Filter from "./filter/Filter";
import Curosel from "./curosel/Curosel";
import "./beranda.css";

function Beranda() {
  return (
    <div className="beranda">
      {/* <Navbar /> */}
      <div className="berandaContainer">
        <div className="title">
          <Title title1="Aku Cinta Budaya Negeri Ku" />
          <Title title2="Karena Itu Adalah Kebanggaanku" />
        </div>
        <div className="filter-container">
          <Filter filterFor="Asal Daerah" />
        </div>
        <Curosel />
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
