import Box from "./box/Box";
import items from "../../../source";
import "./curosel.css";

function Curosel() {
  return (
    <div className="curosel">
      {items.map((item) => (
        <Box
          key={item.id}
          gambar={item.img}
          title={item.title}
          asal={item.asal}
          paragraf1={items.paragraf1}
          paragraf2={items?.paragraf2}
          paragraf3={items?.paragraf3}
        />
      ))}
    </div>
  );
}

export default Curosel;
