import "./logout.css";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="logout">
      <Link className="logout_btn" to="#">
        Logout
      </Link>
    </div>
  );
};

export default Logout;
