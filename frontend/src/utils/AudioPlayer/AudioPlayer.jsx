import React, { useRef, useState } from "react";
import "./AudioPlayer.css"; // Import file CSS untuk tampilan
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const IconStyle = {
    color: "#646669ff", // Ganti warna sesuai yang diinginkan
    // tambahkan properti gaya lainnya jika diperlukan
  };
  const playIcon = <FontAwesomeIcon icon={faPlay} style={IconStyle} />;
  const pauseIcon = <FontAwesomeIcon icon={faPause} style={IconStyle} />;

  const audioRef = useRef(null); // Referensi untuk audio element

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(false);
    } else {
      audio.pause();
      setIsPlaying(true);
    }
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src=".../../../src/audio/bgn.mp3"
        autoPlay
        preload="metadata"
      />{" "}
      {/* Menambahkan atribut autoPlay untuk memainkan audio secara otomatis */}
      <div className="audio-player-controls">
        <button onClick={togglePlay}>
          {isPlaying ? <span>{playIcon}</span> : <span>{pauseIcon}</span>}
        </button>{" "}
        {/* Tombol untuk memutar/hentikan audio */}
      </div>
    </div>
  );
};

export default AudioPlayer;
