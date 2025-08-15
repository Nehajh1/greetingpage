import "./Dance.css";
import rasLeelaImg from "./assets/dance.png"; // Replace with your actual image path

export default function DancePage() {
  return (
    <div className="ras-container">
      <img src={rasLeelaImg} alt="Ras Leela" className="ras-image" />
      <div className="ras-story">
        <p>
          On a moonlit night in the sacred land of Vrindavan, the air was filled with the
          fragrance of blooming flowers and the sweet sound of Krishna’s flute. 
          Drawn by the divine melody, Radha and the Gopis left everything behind and 
          gathered in the forest, their hearts overflowing with love and devotion.
        </p>
        <p>
          There, in the center, stood Kanha — his peacock feather swaying gently, his 
          smile enchanting the world. With every note he played, the Gopis swirled in 
          graceful movements, their eyes fixed only on him. Time stood still as Krishna 
          multiplied himself to dance with each one, ensuring no heart felt left behind.
        </p>
        <p>
          Radha, the beloved of Krishna, danced beside him in perfect harmony — their 
          steps weaving a story of eternal love. The Ras Leela was not just a dance; it 
          was the union of souls, the celebration of divine joy, and the promise that 
          love, pure and selfless, is timeless.
        </p>
      </div>
    </div>
  );
}
