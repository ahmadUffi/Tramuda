import "./register.css";

function Register() {
  return (
    <div className="register">
      <div className="regisContainer">
        <h1>Selamat Berkunjung!</h1>

        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" />
        </div>
        <div className="input-container">
          <label>Confirm Password </label>
          <input type="password" name="pass" />
        </div>

        <a href="#">Lupa Password?</a>
        <a href="#">Buat akun baru</a>

        <button className="regisBut">
          <p>Login</p>
        </button>
      </div>
    </div>
  );
}

export default Register;
