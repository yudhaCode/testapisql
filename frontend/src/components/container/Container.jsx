import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";
import Pengantin from "../sections/pengantin/Pengantin";
import Acara from "../sections/acara/Acara";
import Lokasi from "../sections/lokasi/Lokasi";
import Gallery from "../sections/gallery/Gallery";
import Live from "../sections/live/Live";
import Penutup from "../sections/penutup/Penutup";
import "./container.css";
import ProtokolKesehatan from "../sections/protokolKesehatan/ProtokolKesehatan";
import MenuBar from "../menuBar/MenuBar";
import RSVPForm from "../sections/rsvpUcapan/RSVPForm";
import Sampul from "../sections/sampul/Sampul";
import AudioPlayer from "../../utils/AudioPlayer/AudioPlayer";

const handleIdClickContext = createContext();

function Container() {
  const [sampulOpen, setSampulOpen] = useState("");
  const [menuBarStatic, setMenuBarStatic] = useState("");
  const [selectedId, setSelectedId] = useState({
    pengantin: false,
    acara: false,
    lokasi: false,
    gallery: false,
    live: false,
    protokolKesehatan: false,
    rsvp: false,
    penutup: false,
  }); // State untuk menyimpan id yang dipilih

  function updateSampulOpen(hideDisplay) {
    setSampulOpen(hideDisplay);
  }

  function updateMenuBarClose(staticMenuBar) {
    setMenuBarStatic(staticMenuBar);
  }

  function updateCloseModal(closeModalTrue) {
    setMenuBarStatic(closeModalTrue);
  }

  const handleIdClick = (id) => {
    setSelectedId({ ...selectedId, [id]: true });
  };

  console.log(sampulOpen);

  //

  useEffect(() => {
    const handleFullscreen = () => {
      const container = document.documentElement; // Mengambil elemen root dari dokumen
      if (container.requestFullscreen) {
        container.requestFullscreen(); // Aktifkan mode fullscreen
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen(); // Mode fullscreen untuk Firefox
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen(); // Mode fullscreen untuk Chrome, Safari, dan Opera
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen(); // Mode fullscreen untuk Internet Explorer
      }
    };

    if (sampulOpen) {
      handleFullscreen(); // Panggil fungsi handleFullscreen jika sampulOpen bernilai true
    }
  }, [sampulOpen]);

  return (
    <>
      <main className="container">
        <div className="sampul-wrapper">
          <Sampul onClick={updateSampulOpen} />
        </div>
        {sampulOpen && <AudioPlayer />}
        <Pengantin sampulOpen={sampulOpen} selectedId={selectedId.pengantin} />
        <Acara sampulOpen={sampulOpen} selectedId={selectedId.acara} />
        <Lokasi sampulOpen={sampulOpen} selectedId={selectedId.lokasi} />
        <Gallery sampulOpen={sampulOpen} selectedId={selectedId.gallery} />
        <Live sampulOpen={sampulOpen} selectedId={selectedId.live} />
        <ProtokolKesehatan
          sampulOpen={sampulOpen}
          selectedId={selectedId.protokolKesehatan}
        />
        <RSVPForm sampulOpen={sampulOpen} selectedId={selectedId.rsvp} />
        <Penutup
          sampulOpen={sampulOpen}
          menuBarClose={updateMenuBarClose}
          closeModalTrue={updateCloseModal}
          selectedId={selectedId.penutup}
        />
        <MenuBar
          sampulOpen={sampulOpen}
          menuBarStatic={menuBarStatic}
          sendSelectedIdToParent={handleIdClick}
        />
      </main>
    </>
  );
}

export default Container;
export { handleIdClickContext };

// export default Container;
