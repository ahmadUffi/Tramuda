import icon from "../../../assets/img/login/icon.png";
import Modal from "../../Utility/modal/Modal";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";

function Login({ closeHandler, renderRegisHandler }) {
  const navigate = useNavigate();

  function navigateHandler(e) {
    e.preventDefault();
    navigate("/akun");
    window.scrollTo(0, 0);
    closeHandler();
  }
  return (
    <Modal>
      <div className="login">
        <div className="loginContainer">
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <h1>Selamat Berkunjung!</h1>
          <div>
            <p>Silakan Sign In terlebih dahulu</p>
          </div>
          <form onSubmit={navigateHandler}>
            <div className="input-container" style={{ marginTop: "10px" }}>
              <label htmlFor="username">Username :</label>
              <input type="text" name="uname" placeholder="Username" required />
            </div>
            <div className="input-container">
              <label htmlFor="Password">Password :</label>
              <input
                type="password"
                name="pass"
                placeholder="Password"
                required
              />
            </div>
            <div className="fiturLain">
              <div className="linkDom">
                <p href="#">Lupa Password</p>
              </div>
              <div className="linkDom">
                <p href="#" onClick={renderRegisHandler}>
                  Buat akun baru
                </p>
              </div>
            </div>
            <div className="akunBtn">
              <button className="button">Login</button>
            </div>
          </form>

          <div className="close" onClick={closeHandler}>
            X
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Login;
