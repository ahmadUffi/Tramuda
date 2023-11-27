import { Link } from "react-router-dom";
import ButtonFatch from "../../../Utility/button/ButtonFatch";
import "./box.css";

function Box({ delay, title, asal, gambar, paragraf, allItem }) {
  return (
    <div className="box">
      <div style={{ animationDelay: `calc(${delay}s)` }} className="container">
        <div className="img">
          <img src={gambar} alt={title} />
        </div>
        <div className="deskripsi">
          <div className="title">
            <h3>
              {title}-{asal}
            </h3>
          </div>
          <p className="boxParagraf">{paragraf}</p>
          <Link to={`/beranda/${title}`} className="linkDom">
            <ButtonFatch action="Details" valueContext={allItem} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Box;
