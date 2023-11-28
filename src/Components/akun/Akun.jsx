import "./akun.css";
import ProfileCard from "./profile_card";
import Header from "./header";
import Kontribusi from "./kontribusi";
import Riwayat from "./riwayat";
import Navbar from "../Utility/navbar/Navbar";
import Footer from "../Utility/footer/Footer";

function Akun() {
  return (
    <section className="akun">
      <Navbar />
      <Header />
      <div className="akun_wrapper">
        <ProfileCard />

        <div className="akun_details">
          <Kontribusi />
          <Riwayat />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Akun;
