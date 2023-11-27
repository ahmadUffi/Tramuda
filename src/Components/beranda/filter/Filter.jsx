import "./filter.css";
import items from "../../../source";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useRef, useState } from "react";

function Filter() {
  const refAsal = useRef(null);
  const [valueAsal, setValueAsal] = useState("");
  const asal = ["Semua Daerah", ...new Set(items.map((item) => item.asal))];

  const refMain = useRef(null);
  const [valueMain, setValueMain] = useState("");
  const caraMemainkan = [
    "Semua",
    ...new Set(items.map((item) => item.memainkan)),
  ];

  function selectedAsal(event) {
    setValueAsal(event.value);
  }

  function selectedMAin(event) {
    setValueMain(event.value);
  }
  console.log(valueAsal);
  return (
    <div className="filter">
      <Dropdown
        options={asal}
        value={valueAsal}
        placeholder="Asal Alat Musik"
        className="dropdown dropdoenAsal"
        ref={refAsal}
        onChange={selectedAsal}
        menuClassName="menu"
      />
      <Dropdown
        options={caraMemainkan}
        value={valueMain}
        placeholder="Cara Memainkannyaa"
        className="dropdown dropdoenBawah"
        ref={refMain}
        onChange={selectedMAin}
      />
    </div>
  );
}

export default Filter;
