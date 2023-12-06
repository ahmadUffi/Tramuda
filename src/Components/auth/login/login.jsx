import icon from "../../../assets/img/login/icon.png";
import "./login.css";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

function Login({ renderLogin }) {
  return (
    <Modal>
      <div className="login">
        <div className="loginContainer">
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <h1>Selamat Berkunjung!</h1>
          <div>
            <p style={{ marginTop: "-5px" }}>Silakan Sign In terlebih dahulu</p>
          </div>
          <div className="input-container" style={{ marginTop: "10px" }}>
            <label htmlFor="username">Username :</label>
            <input type="text" name="uname" placeholder="Username" />
          </div>
          <div className="input-container">
            <label htmlFor="Password">Password :</label>
            <input type="password" name="pass" placeholder="Password" />
          </div>
          <div className="fiturLain">
            <Link to="/register" className="linkDom">
              <p href="#">Lupa Password</p>
            </Link>
            <Link to="/register" className="linkDom">
              <p href="#">Buat akun baru</p>
            </Link>
          </div>
          <div className="akunBtn">
            <button className="button">Login</button>
          </div>
          <div className="close" onClick={renderLogin}>
            X
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Login;
