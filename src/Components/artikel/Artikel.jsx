import { useContext } from "react";
import { ItemsContext } from "../../context/ItemContext";
import Footer from "../Utility/footer/Footer";
import "./artikel.css";
import music from "../../assets/img/music.png";
import house from "../../assets/img/house.png";
import gong from "../../assets/img/gong.png";
import Button from "../Utility/button/Button";
import { Link } from "react-router-dom";
import MySVGComponent from "../Utility/svg/MySVGComponent";
import ThreeD from "../ThreeD/Threed";

function Artikel() {
  const { item } = useContext(ItemsContext);

  return (
    <div className="artikel">
      <div className="artikelContainer">
        <div className="mainImg">
          <ThreeD threeD={item.threeD} />
        </div>
        <div className="shortDescription">
          <div className="nama item">
            <img src={gong} alt="icon" className="icon" />
            <h6>Nama Alat</h6>
            <p>{item.nama}</p>
          </div>
          <div className="mainkan item">
            <img src={music} alt="icon" className="icon" />
            <h6>Cara Memainakan</h6>
            <p>{item.memainkan}</p>
          </div>
          <div className="asal item">
            <img src={house} alt="icon" className="icon" />
            <h6>Asal Alat</h6>
            <p>{item.asal}</p>
          </div>
        </div>
        <div className="longDescription">
          <div className="secondImg">
            <img src={item.img} alt="" />
          </div>
          <div className="paragraf">
            <p>{item.p1}</p>
            <p>{item.p2}</p>
          </div>
        </div>
        <div className="action">
          <div className="save">{/* <MySVGComponent /> */}</div>
          <div className="kembali">
            <Link to="/beranda" className="linkDom">
              <Button action="Kembali" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artikel;
