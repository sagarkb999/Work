import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);
  const [isDark, setIsDark] = useState(false);

  // Fetch images from JSON
  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
        setCurrentImg(data.images[0]); // first image as default
      });
  }, []);

  if (!currentImg) return <p>Loading gallery...</p>;

  return (
    <div className="gallery">
      <h1>Image gallery example</h1>

      {/* Full-size image section */}
      <div className="full-img">
        <img
          className="displayed-img"
          src={`images/${currentImg.src}`}
          alt={currentImg.alt}
        />
        <div
          className="overlay"
          style={{
            backgroundColor: isDark ? "rgb(0 0 0 / 50%)" : "rgb(0 0 0 / 0%)",
          }}
        ></div>
        <button
          className={isDark ? "light" : "dark"}
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "Lighten" : "Darken"}
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumb-bar">
        {images.map((img) => (
          <img
            key={img.src}
            src={`images/${img.src}`}
            alt={img.alt}
            onClick={() => setCurrentImg(img)}
          />
        ))}
      </div>
    </div>
  );
}
