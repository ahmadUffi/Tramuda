import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemContext";
import Footer from "../Utility/footer/Footer";
import "./artikel.css";
import musik from "../../assets/img/artikel/musik.png";
import house from "../../assets/img/artikel/asal.png";
import gong from "../../assets/img/artikel/gong.png";
import Button from "../Utility/button/Button";
import { Link } from "react-router-dom";
import ThreeD from "../ThreeD/Threed";
import Navbar from "../Utility/navbar/Navbar";
import HeartSVG from "./SvgHeart";
import Modal from "../Utility/modal/Modal";
import Iframe from "./Iframe";

function Artikel() {
  const { item } = useContext(ItemsContext);

  const [isIframe, setIsIframe] = useState(false);

  function iframeHandler() {
    setIsIframe((prev) => !prev);
  }

  return (
    <div className="artikel">
      <Navbar />
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
            <img src={musik} alt="icon" className="icon" />
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
          <div className="secondImg" onClick={iframeHandler}>
            <img src={item.img} alt="" />
          </div>
          <div className="paragraf">
            <p>{item.p1}</p>
            <p>{item.p2}</p>
          </div>
        </div>
        <div className="action">
          <div className="kembali">
            <Link to="/home" className="linkDom">
              <Button action="Kembali" />
            </Link>
          </div>
          <div className="save">
            <HeartSVG nama={item.nama} />
          </div>
        </div>
      </div>
      {isIframe && <Iframe iframe={item.embade} />}
      <Footer />
    </div>
  );
}

export default Artikel;
