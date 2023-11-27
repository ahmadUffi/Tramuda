import "./style.css";
import Gendang from "../../../assets/img/gendang/Gendang.png";
import Rebab from "../../../assets/img/rebab/Rebab.png";
import Serunai from "../../../assets/img/serunai/Serunai.png";
import Siter from "../../../assets/img/siter/Siter.png";
// import Box from "../../artikel/curosel/box/Box";
import Button from "../../Utility/button/Button";

const index = () => {
  return (
    <div className="riwayat">
      <div className="riwayat_header">
        <h1>Riwayat Alat Musik</h1>
      </div>
      <div className="box_musik">
        <div className="musik_wrapper">
          <div className="musik_card">
            <div className="img">
              <img src={Gendang} alt="Gendang" />
            </div>
            <div className="deskripsi">
              <div className="title">
                <h3>Gendang-Yogyakarta</h3>
              </div>
              <p>
                Gendang Yogyakarta digunakan dalam berbagai jenis seni
                pertunjukan tradisional Jawa..
              </p>

              <Button action="Lihat Lagi" />
            </div>
          </div>

          <div className="musik_card">
            <div className="img">
              <img src={Rebab} alt="Rebab" />
            </div>
            <div className="deskripsi">
              <div className="title">
                <h3>Rebab-Kalimantan</h3>
              </div>
              <p>
                Rebab tradisional Kalimantan, yang digunakan oleh suku Dayak,
                adalah contoh lain dari rebab di Indonesia.
              </p>

              <Button action="Lihat Lagi" />
            </div>
          </div>

          <div className="musik_card">
            <div className="img">
              <img src={Serunai} alt="Serunai" />
            </div>
            <div className="deskripsi">
              <div className="title">
                <h3>Serunai-Sumatra</h3>
              </div>
              <p>
                Serunai berasal dari Pulau Sumatera, Indonesia. Ini adalah alat
                musik tiup yang telah ada dalam budaya Sumatera selama
                berabad-abad.
              </p>

              <Button action="Lihat Lagi" />
            </div>
          </div>

          <div className="musik_card">
            <div className="img">
              <img src={Siter} alt="Siter" />
            </div>
            <div className="deskripsi">
              <div className="title">
                <h3>Siter-Yogyakarta</h3>
              </div>
              <p>
                Siteran atau bisa juga disebut Siter adalah alat musik yang
                berasal dari Jawa Barat, sebuah provinsi di pulau Jawa,
                Indonesia.
              </p>

              <Button action="Lihat Lagi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
