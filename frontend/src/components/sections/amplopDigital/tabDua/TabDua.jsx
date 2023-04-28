import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./TabDua.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import qrCode from "../../../../images/qr-code.png";

function TabDua() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value =
      "Penerima : Bapak/Ibu Fulan Jl. Pembangkrit No. 10, Cianjur, Jawa Barat 43252, Indonesia."; //alamat
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Halo, selamat ya..."); // pesan yang akan ditambahkan
    const phone = "628123456789"; // ganti dengan nomor WhatsApp tujuan
    window.location.href = `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <>
      <p className="rek-text mb-1rem">
        Jika anda ingin memberikan hadiah kepada pengantin dapat melalui alamat
        tercantum berikut.
      </p>

      <LazyLoadImage src={qrCode} effect="blur" className="qr-code mb-1rem" />
      <p className="rek-text mb-1rem">( Salin dengan menekan tombol copy )</p>

      <div className="alamat-info mb-1rem">
        <p>Penerima : Bapak/Ibu Fulan</p>
        <p>Jl. Pembangkrit No. 10, Cianjur, Jawa Barat 43252, Indonesia.</p>
      </div>

      <div className="tab-dua-btn-wrapper mb-1rem">
        <button onClick={copyToClipboard} className="tab-btn">
          <FontAwesomeIcon icon={faCopy} className="fa-icon" />
          <span id="copyText">{copied ? "Copied!" : "Copy"}</span>
        </button>
        <button onClick={openWhatsApp} className="tab-btn ">
          {" "}
          <FontAwesomeIcon icon={faPhone} className="fa-icon" />
          Konfirmasi WA
        </button>
      </div>

      <p className="rek-text mb-1rem">Jazakumullahu khayran</p>
    </>
  );
}

export default TabDua;
