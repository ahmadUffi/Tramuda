import { useContext, useState, useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
// import Modal from "../Utility/modal/Modal";
import Iframe from "./Iframe";

function Artikel() {
  const { item } = useContext(ItemsContext);
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const [isIframe, setIsIframe] = useState(false);

  const header = document.getElementById("counterWrapper");

  if (header !== null) {
    const btn = header.getElementsByClassName("buttonDetail");

    // Active button
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  // AOS.init();
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
            <h6>Cara Memainkanya</h6>
            <p>{item.memainkan}</p>
          </div>
          <div className="asal item">
            <img src={house} alt="icon" className="icon" />
            <h6>Asal Alat</h6>
            <p>{item.asal}</p>
          </div>
        </div>
        <div className="viewDetail">
          <a href="#description">
            <div>
              <h3>View Detail</h3>
            </div>
            <div className="down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
        <div id="description" className="counter"></div>
        <div className="detailCounter">
          <div className="title_description">
            <h1 data-aos="fade-zoom-in-up" data-aos-easing="linear">
              Lihat Detail Lainnya
            </h1>
          </div>
          <div
            id="counterWrapper"
            className="counterWrapper"
            data-aos="fade-zoom-in-up"
            data-aos-easing="linear"
          >
            <a className="buttonDetail active" href="longDescription">
              DETAIL
            </a>
            <a className="buttonDetail" href="#watch">
              WATCH
            </a>
          </div>
        </div>

        <div className="longDescription" id="longDescription">
          <div className="secondImg" data-aos="fade-right">
            <img src={item.img} alt="" />
          </div>
          <div className="paragraf" data-aos="fade-left">
            <p>{item.p1}</p>
            <p>{item.p2}</p>
          </div>
        </div>

        <div className="watch" id="watch">
          <div className="watchCard" data-aos="flip-down">
            <div className="images">
              <div dangerouslySetInnerHTML={{ __html: item.frame }} />
            </div>
            <div>
              <Button
                className="btnFrame"
                noScroll={true}
                // onClick={iframeHandler}
                action="View Full"
              />
            </div>
          </div>
          <div className="watchCard" data-aos="fade-up">
            <div className="images">
              <dir dangerouslySetInnerHTML={{ __html: item.frame }} />
            </div>
            <div>
              <Button
                className="btnFrame"
                noScroll={true}
                // onClick={iframeHandler}
                action="View Full"
              />
            </div>
          </div>
          <div className="watchCard" data-aos="flip-down">
            <div className="images">{item.iframe_3}</div>
            <div>
              <Button
                className="btnFrame"
                noScroll={true}
                // onClick={iframeHandler}
                action="View Full"
              />
            </div>
          </div>
          <div className="watchCard" data-aos="flip-down">
            <div className="images">{item.iframe_4}</div>
            <div>
              <Button
                className="btnFrame"
                noScroll={true}
                // onClick={iframeHandler}
                action="View Full"
              />
            </div>
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
