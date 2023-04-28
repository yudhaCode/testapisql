import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./TabSatu.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import qrCode from "../../../../images/qr-code.png";

function TabSatu() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = "123456789"; // nomor rekening
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
    window.location.href = "https://wa.me/628123456789"; // ganti dengan nomor WhatsApp tujuan
  };

  return (
    <>
      <p className="rek-text mb-1rem">
        Jika anda ingin memberikan hadiah kepada pengantin dapat melalui
        rekening tercantum berikut.
      </p>
      <div className="mb-1rem">
        <p className="bank-text">Bank BSI</p>
        <p className="bank-text">Bank BSI Kode Bank (451)</p>{" "}
        <p className="bank-text">No. Rekening 123456789</p>
        <p className="bank-text">a.n. Nama Fulan</p>
      </div>
      <LazyLoadImage src={qrCode} effect="blur" className="qr-code mb-1rem" />
      <p className="rek-text mb-1rem">( Salin dengan menekan tombol copy )</p>

      <div className="account-info mb-1rem">
        <span className="account-number">123456789</span>
        <button onClick={copyToClipboard} className="tab-btn">
          <FontAwesomeIcon icon={faCopy} className="fa-icon" />
          <span id="copyText">{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <button onClick={openWhatsApp} className="tab-btn mb-1rem">
        {" "}
        <FontAwesomeIcon icon={faPhone} className="fa-icon" />
        Konfirmasi WA
      </button>

      <p className="rek-text mb-1rem">Jazakumullahu khayran</p>
    </>
  );
}

export default TabSatu;
