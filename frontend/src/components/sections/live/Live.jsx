import { useEffect, useState } from "react";
import BgBunga from "../../ornaments/BgBunga";
import "./Live.css";
import FadeIn from "../../../utils/Animation/FadeIn";

function Live(props) {
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
        id="live"
        className={
          props.sampulOpen ? "position-relative height100" : "display-none"
        }
      >
        <div className="bg-image layout-settings  gap-0coma5rem">
          {props.selectedId && <BgBunga />}
          <h2 className="p-text-script acara-title live-title">
            We're going digital
          </h2>
          <p className="live-text">
            Untuk menyaksikan acara pernikahan kami secara virtual, silahkan
            kunjungi akun Instagram yang akan menyiarkan secara langsung atau
            bergabunglah dalam live Zoom berikut ini.
          </p>
          <div className="live-link">
            <a href="#">
              {" "}
              <h3 className="h3-live">instagram @aiuabdul</h3>
            </a>
            <a href="#">
              {" "}
              <h3 className="h3-live">zoom.us/j/9845645</h3>
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Live;
