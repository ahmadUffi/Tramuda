import Button from "../../../Utility/button/Button";
import "./box.css";

function Box({ delay, title, asal, gambar, paragraf }) {
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
          <p>{paragraf}</p>
          <Button action="Details" />
        </div>
      </div>
    </div>
  );
}

export default Box;
