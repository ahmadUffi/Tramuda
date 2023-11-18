import History from "./List/History";
import "./akun.css";
import Back from "./back/Back";
import Logout from "./logout/Logout";
import Profile from "./profile/Profile";
// import Title from "../Utility/title/Title";

function Akun() {
  return (
    <section className="akun">
      <Back />
      <div className="akun_wrapper">
        <Profile />
        <History />
        <Logout />
      </div>
    </section>
  );
}

export default Akun;
