import { useContext } from "react";
import "./button.css";
import { ItemsContext } from "../../../context/ItemContext";
import { Link } from "react-router-dom";

function Button({ action }) {
  function scrollTop() {
    window.scrollTo(top);
  }
  return (
    <div className="button">
      <button onClick={scrollTop}> {action}</button>
    </div>
  );
}

export default Button;
