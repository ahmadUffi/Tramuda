import "./navbar.css";

function Navbar() {
  return (
    <nav className="blur fixed">
      <div className="nav-wrapper font-poppins full flex flex-row">
        {/* Item */}
        <a href="">Akun</a>
        <a href="">Beranda</a>
        <a href="">Kontak</a>
      </div>
    </nav>
  );
}

export default Navbar;
