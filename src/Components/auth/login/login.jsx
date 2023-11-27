import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="music">
          <img src="./peoplemusic.png" />
        </div>
        <h1>Selamat Berkunjung!</h1>
        <div class="align-left">
          <p>Silakan Sign In terlebih dahulu</p>
        </div>
        <div className="input-container">
          <input type="text" name="uname" placeholder="username" />
        </div>
        <div className="input-container">
          <input type="password" name="pass" placeholder="password" />
        </div>
        <Link to="/register">
          <a href="#">Lupa Password?</a>
        </Link>
        <Link to="/register" className="linkDom">
          <a href="#">Buat akun baru</a>
        </Link>

        <Link to="/">
          <button className="loginBut">
            <p>Login</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
