import Box from "./box/Box";
import "./curosel.css";
import items from "../../../source";
function Curosel({ filter }) {
  return (
    <div className="curosel">
      {items
        .filter((item) => {
          return filter.trim().toLowerCase() === ""
            ? item
            : item.nama.toLowerCase().includes(filter.toLowerCase());
        })
        .map((item) => (
          <Box
            key={item.id}
            gambar={item.img}
            title={item.nama}
            asal={item.asal}
            paragraf={item.p1}
            caraMain={item.memainkan}
            delay={item.id}
            allItem={item}
          />
        ))}
    </div>
  );
}

export default Curosel;
