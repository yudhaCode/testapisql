import { useEffect, useState } from "react";
import FadeIn from "../../../utils/Animation/FadeIn";
import Map from "../../../utils/Maps/Maps";
import BgBunga from "../../ornaments/BgBunga";
import "./Lokasi.css";

function Lokasi(props) {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setActive(props.selectedId);
  }, [props.selectedId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 280);
    };

    const handleOrientationChange = () => {
      setIsMobile(window.matchMedia("(orientation: portrait)").matches);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);
    handleResize();
    handleOrientationChange();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <FadeIn active={active || !isMobile}>
      <div
        id="lokasi"
        className={
          props.sampulOpen ? "position-relative height100" : "display-none"
        }
      >
        <div className="bg-image layout-settings gap-1rem">
          {props.selectedId && <BgBunga />}{" "}
          <h2 className="p-text-script acara-title">peta lokasi acara</h2>
          <Map />
        </div>
      </div>
    </FadeIn>
  );
}

export default Lokasi;
