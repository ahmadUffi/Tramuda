import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <h1>Selamat Berkunjung!</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" />
        </div>

        <a href="#">Lupa Password?</a>
        <a href="#">Buat akun baru</a>

        <button className="loginBut">
          <p>Login</p>
        </button>

        <button className="siG">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Sign in with Google</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
