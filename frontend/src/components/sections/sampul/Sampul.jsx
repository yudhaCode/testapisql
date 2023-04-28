import mempelai from "../../../images/mempelai.png";
import React, { useState } from "react";
import BgBunga from "../../ornaments/BgBunga";
import "./Sampul.css";

function Sampul(props) {
  const [hideCover, setHideCover] = useState(false);
  const [hideDisplay, setHideDisplay] = useState(false);

  const handleMoveClick = () => {
    setHideCover(true);
    if (props.onClick) {
      props.onClick(true);
    }
    setTimeout(() => {
      setHideDisplay(true);
      console.log("setTimeout berhasil dipanggil");
    }, 500);
  };
  // updateSharedState(hideDisplay);
  // console.log(hideDisplay);

  return (
    <>
      <div
        id="cover-undangan"
        className={`height100-sampul cover-undangan-wrapper sampul ${
          hideCover ? "hide" : ""
        } ${hideDisplay ? "display-none" : ""}`}
      >
        <div className="layout-settings cover-undangan-section">
          <BgBunga />
          <img src={mempelai} alt="mempelai" className="avatar-pengantin" />
          <div className="nama-pengantin-wrapper">
            <h2 className="nama aiu">Aiu Ratna</h2>
            <p className="dan text-align-left">dan</p>
            <h2 className="nama abdul-hakim">Abdul Hakim</h2>
          </div>
          <p className="nama-tamu">Kpd Bapak/Ibu/Saudara/i</p>
          <p className="text-tamu">
            Tanpa Mengurangi Rasa Hormat, Izinkan Kami Mengundang
            Bapak/Ibu/Saudara/i Untuk Hadir Di Acara Pernikahan Kami.
          </p>
          <button
            id="move-btn"
            className="buka-undangan"
            onClick={handleMoveClick}
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </>
  );
}

export default Sampul;
