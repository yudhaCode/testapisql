import React, { useEffect, useState } from "react";
import "./RSVPForm.css";
import BgBunga from "../../ornaments/BgBunga";
import axios from "axios";
import FadeIn from "../../../utils/Animation/FadeIn";

const RSVPForm = (props) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  // const [ucapan, setUcapan] = useState("");
  const [active, setActive] = useState(false);

  const [rsvp, setRsvp] = useState({
    nama: "-",
    keterangan: "-",
    kehadiran: "Hadir",
    ucapan: "-",
    tanggal_jam: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = value !== "" ? value : "-";

    // Validasi jumlah karakter
    if (name === "ucapan" && value.length >= 201) {
      return; // Tidak melakukan apa-apa jika jumlah karakter sudah mencapai atau melebihi 200
    }

    setRsvp((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleKeyDown = (e) => {
    const { name, value } = e.target;

    // Validasi jumlah karakter
    if (name === "ucapan" && value.length >= 201) {
      // Mengizinkan tombol backspace (kode 8) untuk bekerja
      if (e.keyCode !== 8) {
        e.preventDefault(); // Mencegah aksi default dari tombol-tombol lainnya
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const currentDateStr = currentDate.toLocaleDateString();
      const currentTimeStr = currentDate.toLocaleTimeString();
      setDate(currentDateStr);
      setTime(currentTimeStr);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const formattedDatetime = `${date} ${time}`;
    setRsvp((prevRsvp) => ({ ...prevRsvp, tanggal_jam: formattedDatetime }));
  }, [date, time]);

  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    const fetchAllUndangan = async () => {
      try {
        const res = await axios.get("http://localhost:5000/undangan");
        // console.log(res);
        setRsvps(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUndangan();
  }, [rsvps]);

  const handleClick = async (e) => {
    e.preventDefault();
    document.getElementById("myForm").reset();

    try {
      await axios.post("http://localhost:5000/undangan", rsvp);
      const res = await axios.get("http://localhost:5000/undangan");
      console.log("Data berhasil dikirim:", rsvp);
      // Mengosongkan form
      setRsvps(res.data);
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    } catch (err) {
      console.log(err);
    }
  };

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
        id="rsvp"
        className={
          props.sampulOpen ? "position-relative height100 " : "display-none"
        }
      >
        {props.selectedId && <BgBunga />}

        <div className="rsvp-d">
          <h2 className="h2-rsvp">Ucapan dan RSVP</h2>
          <hr />
          <form id="myForm">
            <div className="input-wrapper">
              <label>
                Nama: *
                <input type="text" name="nama" onChange={handleChange} />
              </label>
            </div>

            <div className="input-wrapper">
              <label>
                Keterangan: *
                <input type="text" name="keterangan" onChange={handleChange} />
              </label>
            </div>

            <div className="input-wrapper">
              <label>
                Kehadiran: *
                {/* <div className="kehadiran">
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="kehadiran"
                      value="Hadir"
                      checked={rsvp.kehadiran === "Hadir"}
                      onChange={handleChange}
                    />
                    <label>Hadir</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="kehadiran"
                      value="Tidak Hadir"
                      checked={rsvp.kehadiran === "Tidak Hadir"}
                      onChange={handleChange}
                    />
                    <label>Tidak Hadir</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="kehadiran"
                      value="Belum Tahu"
                      checked={rsvp.kehadiran === "Belum Tahu"}
                      onChange={handleChange}
                    />
                    <label>Belum Tahu</label>
                  </li>
                </ul>
              </div> */}
                <div class="radio-tile-group">
                  <div class="input-container">
                    <input
                      id="hadir"
                      class="radio-button"
                      type="radio"
                      name="kehadiran"
                      value="Hadir"
                      checked={rsvp.kehadiran === "Hadir"}
                      onChange={handleChange}
                    />
                    <div class="radio-tile">
                      <label for="hadir" class="radio-tile-label">
                        Hadir
                      </label>
                    </div>
                  </div>

                  <div class="input-container">
                    <input
                      id="tidak-hadir"
                      class="radio-button"
                      type="radio"
                      name="kehadiran"
                      value="Tidak Hadir"
                      checked={rsvp.kehadiran === "Tidak Hadir"}
                      onChange={handleChange}
                    />
                    <div class="radio-tile">
                      <label for="tidak-hadir" class="radio-tile-label">
                        Tidak Hadir
                      </label>
                    </div>
                  </div>

                  <div class="input-container">
                    <input
                      id="belum-tahun"
                      class="radio-button"
                      type="radio"
                      name="kehadiran"
                      value="Belum Tahu"
                      checked={rsvp.kehadiran === "Belum Tahu"}
                      onChange={handleChange}
                    />
                    <div class="radio-tile">
                      <label for="belum-tahu" class="radio-tile-label">
                        Belum Tahu
                      </label>
                    </div>
                  </div>
                </div>
                {/*  */}
              </label>
            </div>
            <div className="input-wrapper">
              {" "}
              <label>
                Ucapan:
                <textarea
                  name="ucapan"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                ></textarea>
                <span className="small-text-rsvp">
                  {rsvp.ucapan === "-" ? 0 : rsvp.ucapan.length} of 200 max
                  characters.
                </span>{" "}
              </label>
            </div>

            <br />
            <button
              type="submit"
              className="button-reset rsvp-submit"
              onClick={handleClick}
            >
              Kirim
            </button>
          </form>
          <h2 className="h2-rsvp mt-3rem">Kiriman Ucapan :</h2>

          {rsvps.map((rsvp) => (
            <div>
              <ul className="list-ucapan">
                <li>
                  <p className="list-ucapan-text">{rsvp.nama}</p>
                </li>
                <li>
                  <p className="list-ucapan-ket">-- {rsvp.keterangan}</p>
                </li>
                <li>
                  <p className="list-ucapan-tgl-ucapan">{rsvp.tanggal_jam}</p>
                </li>
                <li>
                  {" "}
                  <p className="list-ucapan-tgl-ucapan">{rsvp.ucapan}</p>
                </li>
              </ul>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default RSVPForm;
