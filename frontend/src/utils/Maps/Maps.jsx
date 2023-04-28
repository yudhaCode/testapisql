import React from "react";
import "./Maps.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

function Maps() {
  const locationIcon = <FontAwesomeIcon icon={faMapLocation} />;

  const handleClick = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=Gedung+As+Sakinah+Jl.+KH+Abdullah+Bin+Nuh+No.48,+Sawah+Gede,+Kec.+Cianjur,+Kabupaten+Cianjur,+Jawa+Barat+43212`
    );
  };

  return (
    <div className="maps-wrapper">
      <iframe
        title="Gedung As Sakinah"
        className="maps"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?q=Gedung+As+Sakinah+Jl.+KH+Abdullah+Bin+Nuh+No.48,+Sawah+Gede,+Kec.+Cianjur,+Kabupaten+Cianjur,+Jawa+Barat+43212&key=AIzaSyAZVVekVvlZF_njx_mtH9YgM8lozU6ITTo`}
        allowFullScreen
      ></iframe>
      <h3 className="maps-title">Gedung Assakinah</h3>
      <p className="maps-location-desc">
        Jl. KH Abdullah Bin Nuh No.48, Sawah Gede, Kec. Cianjur, Kabupaten
        Cianjur, Jawa Barat 43212
      </p>
      <div className="v1-button-wrapper">
        <button className="button-reset" onClick={handleClick}>
          {locationIcon} Buka Maps
        </button>
      </div>
    </div>
  );
}

export default Maps;
