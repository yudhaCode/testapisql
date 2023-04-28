import BgBunga from "../../ornaments/BgBunga";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Gallery.css";
import FadeIn from "../../../utils/Animation/FadeIn";

function Gallery(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fungsi untuk memuat gambar secara dinamis
    const loadImage = () => {
      const tempImages = [];
      for (let i = 1; i <= 15; i++) {
        tempImages.push({
          id: i,
          src: `../../../src/images/gallery/${i}-min.jpg`,
          alt: `Wedding Gallery ${i}`,
        });
      }
      setImages(tempImages);
    };

    loadImage();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
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
        id="gallery"
        className={
          props.sampulOpen
            ? "position-relative height100 pt-pb-2rem"
            : "display-none"
        }
      >
        <div className="bg-image layout-settings gap-2rem">
          {props.selectedId && <BgBunga />}
          <h2 className="p-text-script acara-title">Gallery</h2>
          <div className="gallery">
            <LazyLoadImage
              src={images[currentIndex] ? images[currentIndex].src : ""}
              alt={images[currentIndex] ? images[currentIndex].alt : ""}
              effect="blur"
              className="gallery__image"
              onClick={() => setShowModal(true)}
            />

            {showModal && (
              <div className="modal" onClick={() => setShowModal(false)}>
                <LazyLoadImage
                  effect="blur"
                  src={images[currentIndex] ? images[currentIndex].src : ""}
                  alt={images[currentIndex] ? images[currentIndex].alt : ""}
                />
              </div>
            )}

            <div className="thumbnails">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt=""
                  className={`thumbnail ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="gallery__button gallery__button--left"
            >
              &#8249;
            </button>

            <button
              onClick={handleNext}
              className="gallery__button gallery__button--right"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Gallery;
