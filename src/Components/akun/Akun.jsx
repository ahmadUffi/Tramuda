import "./akun.css";
import ProfileCard from "./profile_card";
import Header from "./header";
import Kontribusi from "./kontribusi";
import Riwayat from "./riwayat";

function Akun() {
  return (
    <section className="akun">
      <Header />
      <div className="akun_wrapper">
        <ProfileCard />

        <div className="akun_details">
          <Kontribusi />
          <Riwayat />
        </div>
      </div>
    </section>
  );
}

export default Akun;
