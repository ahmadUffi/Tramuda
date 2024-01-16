import { useContext } from "react";
import "./footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer flex">
      <h5>ⓒ {year} Tramuda Inc.</h5>
    </footer>
  );
}

export default Footer;
