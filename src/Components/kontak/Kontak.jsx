import "./kontak.css";
import rebab from "../../assets/img/rebab/Rebab.png";
import gendang from "../../assets/img/gendang/Gendang.png";
// import Serunei from "../../assets/img/serunai/Serunai.png";
// import Back from "./back/Back";

const Kontak = () => {
  return (
    <section className="kontak">
      <div className="floating">
        <div className="alat_float">
          <img src={rebab} alt="test" />
        </div>
        <div className="alat_float">
          <img src={gendang} alt="test" />
        </div>
        {/* <div className="alat_float">
          <img src={Serunei} alt="test" />
        </div> */}
      </div>
      <div className="form">
        <form action="" className="kontak_form">
          <header>
            <h1>Hubungi kami</h1>
            <p>isi nama, email, pesan lalu kirimkan kepada kami.</p>
          </header>

          <div className="form_items">
            <div className="item_wrapper">
              <div className="item">
                <label htmlFor="name">Name</label>
                <input type="text" required name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" required name="email" id="email" />
              </div>

              <div className="msg">
                <label htmlFor="msg">Your Message</label>
                <textarea
                  name="msg"
                  required
                  id="msg"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>

            <div className="btn_submit">
              <input type="submit" value="Kirim" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Kontak;
