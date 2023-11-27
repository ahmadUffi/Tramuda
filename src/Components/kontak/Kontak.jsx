import "./kontak.css";
import Button from "../Utility/button/Button";

const Kontak = () => {
  return (
    <section className="contact">
      <div className="contact_header">
        <h1>Hubungi kami</h1>
        <span>
          Hubungi kami jika anda ingin menyampaikan sesuatu. Kami butuh Feedback
          anda!
        </span>
      </div>
      <div className="contact_wrapper">
        <div className="contact_side">
          <div className="logos">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="side_title">
              <h3>Tramuda</h3>
              <span>
                Tramuda adalah website untuk memperkenalkan musik tradisional
              </span>
            </div>
          </div>
          <div className="phone">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div className="side_title">
              <h3>Phone</h3>
              <span>+62 815-7891-7652</span>
            </div>
          </div>
          <div className="phone">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="side_title">
              <h3>Email</h3>
              <span>tramuda@gmail.com</span>
            </div>
          </div>
          {/* <div className="email"></div> */}
        </div>
        <div className="contact_form">
          <form action="#">
            <h2>Kirimkan Pesanmu!</h2>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Nama lengkap</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required></textarea>
              <span>Pesanmu</span>
            </div>
            <div className="inputBox">
              {/* <input type="submit" value="Submit" /> */}
              <Button action="Kirim" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
