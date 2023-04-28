import BgBunga from "../../ornaments/BgBunga";
import GunakanMaser from "../../../images/protokol-kesehatan/gunakan-masker.png";
import HindariKerumunan from "../../../images/protokol-kesehatan/hindari-kerumunan.png";
import JagaJarak from "../../../images/protokol-kesehatan/jaga-jarak.png";
import MencuciTangan from "../../../images/protokol-kesehatan/mencuci-tangan.png";
import TidaBersalaman from "../../../images/protokol-kesehatan/tidak-bersalaman.png";
import "./ProtokolKesehatan.css";
import { useEffect, useState } from "react";
import FadeIn from "../../../utils/Animation/FadeIn";

function ProtokolKesehatan(props) {
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
        id="protokolKesehatan"
        className={
          props.sampulOpen ? "position-relative height100" : "display-none"
        }
      >
        {props.selectedId && <BgBunga />}

        <div className="bg-image layout-settings gap-0coma5rem">
          <h2 className="p-text-script acara-title">Protokol Kesehatan</h2>
          <p className="live-text">
            Izinkan kami untuk menghimbau Bapak/Ibu/Saudara/i tamu undangan agar
            tetap memperhatikan protokol kesehatan demi mencegah penyebaran
            virus Covid-19. Terima kasih atas perhatian dan kerjasamanya.
          </p>
          <div>
            <ul className="protokol-kesehatan-wrapper">
              <li>
                <img
                  src={GunakanMaser}
                  alt={GunakanMaser}
                  className="prokes-icon-img"
                />
                <p>Gunakan Masker</p>
              </li>
              <li>
                <img
                  src={HindariKerumunan}
                  alt={HindariKerumunan}
                  className="prokes-icon-img"
                />
                <p>Hindari Kerumunan</p>
              </li>
              <li>
                <img
                  src={JagaJarak}
                  alt={JagaJarak}
                  className="prokes-icon-img"
                />
                <p>Jaga Jarak</p>
              </li>
              <li>
                <img
                  src={MencuciTangan}
                  alt={MencuciTangan}
                  className="prokes-icon-img"
                />
                <p>Mencuci Tangan</p>
              </li>
              <li>
                <img
                  src={TidaBersalaman}
                  alt={TidaBersalaman}
                  className="prokes-icon-img"
                />
                <p>Tidak Bersalaman</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default ProtokolKesehatan;
