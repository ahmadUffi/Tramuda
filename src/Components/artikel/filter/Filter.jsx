import "./filter.css";
import items from "../../../source";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useRef, useState } from "react";

function Filter({ filterFor }) {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const [isRender, setIsRendered] = useState();
  const asal = [...new Set(items.map((item) => item.asal))];

  useEffect(() => {
    if (ref.current) {
      setIsRendered(true);
    }
  }, [asal]);

  function selected(event) {
    setValue(event.value);
  }

  console.log(value);

  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <div className="filter">
      <Dropdown
        options={asal}
        value={value}
        placeholder="Select an option"
        className="dropdown"
        ref={ref}
        onChange={selected}
      />
    </div>
  );
}

export default Filter;
