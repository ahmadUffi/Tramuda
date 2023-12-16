import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Navbar from "../../Utility/navbar/Navbar";
import Footer from "../../Utility/footer/Footer";

function Register() {
  return (
    <div className="register">
      <div className="regisContainer">
        <div className="music">
          <img src="./peoplemusic.png" />
        </div>
        <h1>Selamat Berkunjung!</h1>

        <div className="input-container">
          <input type="text" name="email" placeholder="email" />
        </div>
        <div className="input-container">
          <input type="text" name="uname" placeholder="username" />
        </div>
        <div className="input-container">
          <input type="password" name="pass" placeholder="password" />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="confirmpass"
            placeholder="confirm password"
          />
        </div>
        <Link to="/login">
          <a href="#">Lupa Password?</a>
        </Link>
        <Link to="/login">
          <a href="#">Buat akun baru</a>
        </Link>
        <Link to="/">
          <button className="regisBut">
            <p>Login</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
