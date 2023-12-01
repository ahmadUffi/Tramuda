import "./riwayat.css";
import ButtonFatch from "../../Utility/button/ButtonFatch";

function Riwayat({ gambar, title, asal, paragraf, allItem, delay }) {
  return (
    <div>
      <div className="boxRiwayat">
        <div
          className="containerRiwayat"
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="img">
            <img src={gambar} alt={title} />
          </div>
          <div className="deskripsiRiwayat">
            <div className="titleRiwayat">
              <h3>
                {title}-{asal}
              </h3>
            </div>
            <p className="boxParagraf">{paragraf}</p>
            <ButtonFatch
              action="Details"
              valueContext={allItem}
              navigateLink={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Riwayat;
