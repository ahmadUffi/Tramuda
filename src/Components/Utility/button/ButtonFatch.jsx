import { useContext } from "react";
import "./button.css";
import { ItemsContext } from "../../../context/ItemContext";
import { Link } from "react-router-dom";

function ButtonFatch({ action, valueContext }) {
  const { changeItem } = useContext(ItemsContext);

  return (
    <div className="button">
      <button onClick={() => changeItem(valueContext)}> {action}</button>
    </div>
  );
}

export default ButtonFatch;
