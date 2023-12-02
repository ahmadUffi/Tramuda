import Button from "../../Utility/button/Button";
import icon from "../../../assets/img/login/icon.png";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <h1>Selamat Berkunjung!</h1>
        <div>
          <p>Silakan Sign In terlebih dahulu</p>
        </div>
        <div className="input-container">
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
        <Link to="/akun" className="linkDom">
          <Button action="login" />
        </Link>
      </div>
    </div>
  );
}

export default Login;
