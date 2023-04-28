import rosesOne from "../../images/roses-one.png";
import rosesTwo from "../../images/roses-two.png";
import "./BgBunga.css";

function BgBunga() {
  return (
    <>
      <img
        src={rosesOne}
        className="ornament-mawar-satu"
        alt="ornament-mawar-satu"
      />
      <img
        src={rosesTwo}
        className="ornament-mawar-dua"
        alt="ornament-mawar-dua"
      />
    </>
  );
}

export default BgBunga;
