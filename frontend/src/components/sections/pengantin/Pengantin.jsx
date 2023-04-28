import bismillah from "../../../images/bismillah.png";
import rings from "../../../images/rings.svg";
import avatarPerempuan from "../../../images/avatar-perempuan.png";
import avatarPria from "../../../images/avatar-pria.png";
import "./Pengantin.css";
import BgBunga from "../../ornaments/BgBunga";
import { useEffect, useState } from "react";
import FadeIn from "../../../utils/Animation/FadeIn";

function Pengantin(props) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(props.sampulOpen);
  }, [props.sampulOpen]);

  return (
    <FadeIn active={active}>
      <div
        id="pengantin"
        className={
          props.sampulOpen ? "position-relative height100" : "display-none"
        }
      >
        <div className="bg-image layout-settings gap-2rem">
          {props.sampulOpen && <BgBunga />}
          <div className="d-flex-fd-column-align-center">
            <div
              className={`transition-bottom-to-top ${active ? "active" : ""}`}
            >
              <img src={bismillah} alt="bismillah" className="bismillah" />
            </div>

            <div
              className={`transition-top-to-bottom ${active ? "active" : ""}`}
            >
              <p className="salam-pembuka">
                Assalamu'alaikum warahmatullahi wabarakatuh. Kami berdoa semoga
                Allah Subhanahu Wa Ta'ala meridhoi acara akad nikah yang akan
                kami selenggarakan.
              </p>
            </div>
            <div className="avatar-pasangan">
              <div
                className={`d-flex j-content-end transition-center-to-left ${
                  active ? "active" : ""
                }`}
              >
                <img
                  src={avatarPerempuan}
                  alt="avatar-perempuan"
                  className="perempuan"
                />
              </div>
              <div
                className={`d-flex transition-center-to-right ${
                  active ? "active" : ""
                }`}
              >
                <img src={avatarPria} alt="avatar-pria" className="pria" />
              </div>
            </div>
          </div>
          <div className="d-flex-fd-column-at-center">
            {/* <div
          className={`d-flex-fd-column-at-center transition-top-to-bottom ${
            active ? "active" : ""
          }`}
        > */}
            <div
              className={`d-flex-fd-column-at-center transition-top-to-bottom ${
                active ? "active" : ""
              }`}
            >
              <h2 className="p-text-script wanita">Aiu Ratna</h2>
              <p className="keterangan">
                Putri kedua dari Bapak Ahmad Fulan Rahimahullah
              </p>
            </div>

            <div
              className={`d-flex-fd-column-at-center transition-top-to-bottom ${
                active ? "active" : ""
              }`}
            >
              <img src={rings} alt="cincin" className="icon-cincin" />
              <h2 className="p-text-script pria">Abdul Hakim</h2>
              <p className="keterangan">
                Putra ketiga dari Bapak Abu Fulan dan Ibu Fulanah, S,M.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Pengantin;
