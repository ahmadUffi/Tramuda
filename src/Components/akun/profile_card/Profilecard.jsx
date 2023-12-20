import "./profilecard.css";
import profil from "../../../assets/img/akun/profile.jpg";
import Button from "../../Utility/button/Button";
import { useState } from "react";

const Profilecard = () => {
  const [settings, setSettings] = useState(false);

  function settingsHnadler() {
    setSettings(!settings);
  }
  return (
    <div className="akun_box">
      <div className="akun">
        <img src={profil} alt={profil} style={{ objectFit: "cover" }} />
        <div className="akun_description">
          <h3>Nur Laily Fitri Mahfudho</h3>
          <h6 className="email">nurLaily2024@gmail.com</h6>
          <p className="asal">Purwokerto - Jawa Tengah</p>
          <div id="setting">
            <Button action="Setting Profile" onClick={settingsHnadler} />
            <div className="setting__profile">
              {settings && (
                <ul>
                  <li>Edit Profile</li>
                  <li>Remove Profile</li>
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
