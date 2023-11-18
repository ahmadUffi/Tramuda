import "./kontak.css";
import Back from "./back/Back";

const Kontak = () => {
  return (
    <div className="kontak">
      <div className="nav">
        <Back />
      </div>
      <div className="form">
        <form action="" className="kontak_form">
          <header>
            <h1>Hubungi kami</h1>
            <p>isi nama, email, pesan lalu kirimkan kepada kami.</p>
          </header>

          <div className="form_items">
            <div className="item_wrapper">
              <div className="item">
                <label htmlFor="name">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{
                      width: "12px",
                      height: "12px",
                      textAlign: "center",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Name
                </label>
                <input type="text" required name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" required name="email" id="email" />
              </div>

              <div className="msg">
                <label htmlFor="msg">Your Message</label>
                <textarea
                  name="msg"
                  required
                  id="msg"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>

            <div className="btn_submit">
              <input type="submit" value="Kirim" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kontak;
