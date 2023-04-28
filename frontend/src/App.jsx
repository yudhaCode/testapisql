import "./styles.css";
import Container from "./components/container/Container";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Memeriksa dukungan fullscreen oleh browser
    const fullscreenEnabled =
      document.fullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.documentElement.webkitRequestFullScreen;

    // Menggunakan method requestFullscreen() untuk membuat halaman menjadi fullscreen
    const makeFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
      }
    };

    // Memeriksa dukungan fullscreen dan membuat halaman menjadi fullscreen
    if (fullscreenEnabled) {
      makeFullscreen();
    }
  }, []);

  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
