import "./profilecard.css";
import profil from "../../../assets/img/akun/profile.jpg";
import Button from "../../Utility/button/Button";
import { useContext, useState } from "react";
import { AkunContext } from "../../../context/AkunContext";

const Profilecard = () => {
  const [settings, setSettings] = useState(false);
  const { user } = useContext(AkunContext);
  const email = user.replace(/\s/g, "");

  function settingsHnadler() {
    setSettings(!settings);
  }
  return (
    <div className="akun_box">
      <div className="akun">
        <img src={profil} alt={profil} style={{ objectFit: "cover" }} />
        <div className="akun_description">
          <h3>{user}</h3>
          <h6 className="email">{email}2024@gmail.com</h6>
          <p className="asal">Purwokerto - Jawa Tengah</p>
          <div id="setting">
            <Button action="Setting Profile" onClick={settingsHnadler} />
            <div className="setting__profile">
              {settings && (
                <ul>
                  <li>Edit Profile</li>
                  <li>Logout</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
