import Button from "../../../Utility/button/Button";

function Box({ title, asal, gambar, paragraf1, paragraf2, paragraf3 }) {
  return (
    <div className="box">
      <div className="container">
        <div className="img">
          <img src={gambar} alt={title} />
        </div>
        <div className="deskripsi">
          <div className="title">
            <h3>
              {title}-{asal}
            </h3>
          </div>
          <p>{paragraf1}</p>
          <p>{paragraf2}</p>
          <p>{paragraf3}</p>
          <Button action="Details" />
        </div>
      </div>
    </div>
  );
}

export default Box;
