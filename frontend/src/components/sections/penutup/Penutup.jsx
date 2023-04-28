import ornament1 from "../../../images/ornament1.png";
import "./Penutup.css";
import BgBunga from "../../ornaments/BgBunga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AmplopDigital from "../amplopDigital/AmplopDigital";
import React, { useEffect, useState } from "react";
import FadeIn from "../../../utils/Animation/FadeIn";

function Penutup(props) {
  const envelope = <FontAwesomeIcon icon={faEnvelope} />;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuBarOpen, setMenuBarOpen] = useState(true);
  const [active, setActive] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setMenuBarOpen(false);
    props.menuBarClose(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    props.closeModalTrue(true);
  };
  //
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
        id="penutup"
        className={
          props.sampulOpen ? "position-relative height100" : "display-none"
        }
      >
        <div className="bg-image layout-settings gap-2rem">
          {props.selectedId && <BgBunga />}
          <div className="d-flex-fd-column-align-center">
            <img src={ornament1} alt="bismillah" className="ornament1" />

            <p className="penutup-text">
              Kami merasa sangat terhormat dan bahagia apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
              kepada kami.
            </p>
            <p className="ar-rum">
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.” (QS. Ar-Ruum : 21)
            </p>
            <p className="salam-penutup">
              Wassalamu’alaikum warahmatullahi wabarakatuh Kami yang berbahagia,
            </p>
            <h2 className="p-text-script ">Aiu Ratna & Abdul Hakim</h2>
            <div className="nama-orangtua-wrapper">
              <p>Kel. Bpk. Abu Fulan & Ibu Fulanah</p>

              <p>Kel. Bpk. Hakim Fulan & Ibu Fulanah</p>
            </div>
            <div className="v1-button-wrapper">
              <button className="button-reset" onClick={openModal}>
                {envelope} Amplop Digital
              </button>
              {modalIsOpen && (
                <AmplopDigital
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Penutup;
