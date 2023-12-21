import { useContext } from "react";
import "./button.css";
import { ItemsContext } from "../../../context/ItemContext";
import { Link } from "react-router-dom";

function Button({ action, className, style, noScroll, onClick }) {
  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="button">
      <button
        className={className ? ` ${className}` : ""}
        style={style ? ` ${{ style }}` : {}}
        onClick={(noScroll ? "" : scrollTop, onClick)}
      >
        {action}
      </button>
    </div>
  );
}

export default Button;
