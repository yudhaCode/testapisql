import React, { useState, useEffect, useRef } from "react";
import "./MenuBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCalendar,
  faMapLocation,
  faImage,
  faTv,
  faHeartPulse,
  faClose,
  faChevronCircleUp,
  faCalendarAlt,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const MenuBar = (props) => {
  const [menuBarClass, setMenuBarClass] = useState("display-none");
  // const [selectedId, setSelectedId] = useState(null); // State untuk menyimpan ID yang dipilih

  const handleIdClick = (id) => {
    props.sendSelectedIdToParent(id);
  };

  useEffect(() => {
    if (props.sampulOpen) {
      setMenuBarClass(`${props.sampulOpen ? "navbar" : "display-none"}`);
    }

    if (props.menuBarStatic === false) {
      setMenuBarClass(`${props.sampulOpen ? "navbar z-index-1" : "navbar"}`);
    }
  }, [props.sampulOpen, props.menuBarStatic]);

  const [activeIndex, setActiveIndex] = useState(
    document.querySelector(".pengantin-class")
  );
  const [isUp, setIsUp] = useState(true);
  const pengantinClassRef = useRef(null);
  const navTextClassRef = useRef(null);
  const navIcon = useRef(null);

  useEffect(() => {
    pengantinClassRef.current = document.querySelector(".pengantin-class");
    navTextClassRef.current = document.querySelector(".nav-text");
    navIcon.current = document.querySelector(".icon");

    [pengantinClassRef, navTextClassRef, navIcon].forEach((ref) => {
      if (ref.current) {
        ref.current.classList.add("active");
      }
    });
  }, []);

  const handleListClick = (index) => {
    setActiveIndex(index);
    [pengantinClassRef, navTextClassRef, navIcon].forEach((ref) => {
      if (ref.current) {
        ref.current.classList.remove("active");
      }
    });
  };

  const handleShowMenuClick = () => {
    const navbar = document.querySelector(".navbar");

    if (isUp) {
      navbar.style.bottom = "-68px";
      setIsUp(false);
    }
    if (!isUp) {
      navbar.style.bottom = "-138px";
      setIsUp(true);
    }
  };

  const liList = [
    {
      id: "#pengantin",
      icon: faHeart,
      text: "Pengantin",
      class: "pengantin-class",
    },
    {
      id: "#acara",
      icon: faCalendar,
      text: "Acara",
      class: "",
    },
    {
      id: "#lokasi",
      icon: faMapLocation,
      text: "Lokasi",
      class: "",
    },
    {
      id: "#gallery",
      icon: faImage,
      text: "Gallery",
      class: "",
    },
    {
      id: "#chevronArrow",
      icon: isUp ? faChevronCircleUp : faChevronCircleDown,
      text: isUp ? "Buka" : "Tutup",
      class: "chevron-arrow",
      onClick: handleShowMenuClick,
    },
    {
      id: "#live",
      icon: faTv,
      text: "Live",
      class: "",
    },
    {
      id: "#rsvp",
      icon: faCalendarAlt,
      text: "Rsvp",
      class: "",
    },

    {
      id: "#protokolKesehatan",
      icon: faHeartPulse,
      text: "Protokol",
      class: "",
    },
    {
      id: "#penutup",
      icon: faClose,
      text: "Penutup",
      class: "",
    },
  ];

  return (
    <nav className={menuBarClass}>
      <ul>
        {liList.map((li, index) => (
          <li
            key={index}
            onClick={
              li.id !== "#chevronArrow"
                ? () => handleListClick(index)
                : handleShowMenuClick
            }
            className={`${li.class}${activeIndex === index ? ` active` : ``}`}
          >
            <a
              href={li.id}
              id={li.id}
              onClick={() => handleIdClick(li.id.slice(1))}
            >
              <div>
                <FontAwesomeIcon
                  icon={li.icon}
                  className={`icon ${
                    activeIndex === index ? "active" : "icon"
                  }`}
                />
              </div>
              <span
                className={
                  li.class !== "chevron-arrow"
                    ? "nav-text" + (activeIndex === index ? " active" : "")
                    : "nav-text chevron-arrow"
                }
              >
                {li.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
