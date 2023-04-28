import BgBunga from "../../ornaments/BgBunga";
import flower from "../../../images/flower.png";
import "./Acara.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import Countdown from "../../../utils/Countdown/Countdown";
import { useEffect, useState } from "react";
import FadeIn from "../../../utils/Animation/FadeIn";

function Acara(props) {
  const clockIcon = <FontAwesomeIcon icon={faClock} />;
  const locationIcon = <FontAwesomeIcon icon={faMapLocation} />;

  // console.log(props);

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
        id="acara"
        className={
          props.sampulOpen ? "position-relative height100" : "display-none"
        }
      >
        <div className="bg-image layout-settings gap-2rem">
          {props.selectedId && <BgBunga />}

          <div className="d-flex-fd-column-align-center">
            <div
              className={`transition-bottom-to-top ${active ? "active" : ""}`}
            >
              <img src={flower} alt="flower" className="flower" />
            </div>

            <p className="p-text-script acara-title">Akad Nikah</p>
            <div className="waktu-nikah">
              <p className="bulan">april</p>
              <div className="tanggal-nikah">
                <p className="hari">Jumat</p>
                <p className="tanggal">14</p>
                <p className="tahun">2023</p>
              </div>
              <p>{clockIcon} Pukul 09.00 WIB</p>
              <p>{locationIcon} Gedung Serbaguna Assakinah, Kab. Cianjur</p>
            </div>

            <h2 className="p-text-script acara-title">Walimah</h2>
            <div className="waktu-nikah">
              <p className="bulan">april</p>
              <div className="tanggal-nikah">
                <p className="hari">Jumat</p>
                <p className="tanggal">14</p>
                <p className="tahun">2023</p>
              </div>
              <p>{clockIcon} Pukul 11.00 WIB - 13:00 WIB</p>
              <p>{locationIcon} Gedung Serbaguna Assakinah, Kab. Cianjur</p>
            </div>
            <h2 className="p-text-script">Hitung mundur acara</h2>
            <Countdown />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Acara;
