import React from "react";
import "./kanha.css";

// Import all your Kanha images here
import kanha1 from "./assets/kanha1.png";
import kanha2 from "./assets/kanha2.png";
import kanha3 from "./assets/kanha3.png";
import kanha4 from "./assets/kanha4.png";
import kanha5 from "./assets/kanha5.png";

function Kanha() {
  const images = [kanha1, kanha2, kanha3, kanha4, kanha5];

  return (
    <div className="kanha-gallery-container">
      <h1>🌸 Kanha Ji Gallery 🌸</h1>
      <div className="kanha-gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Kanha ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Kanha;
