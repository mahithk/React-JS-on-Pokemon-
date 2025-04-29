import { useState } from "react";
import "./styles.css";

const images = [
  "https://wallpapercave.com/wp/Px8NUSM.jpg",
  "https://tse2.mm.bing.net/th?id=OIP.K2QhIMNfk4tiKQ6JYUCe5wHaEo&pid=Api&P=0&h=180",
  "https://wallpaperaccess.com/full/21010.jpg",
  "http://www.pixelstalk.net/wp-content/uploads/2016/02/Cool-Pokemon-Wallpapers-Free-download.jpg",
  "http://wallpapercave.com/wp/oyvlbBI.jpg",
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>🌈Project Gotta Catch Pokemon⚡</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}
