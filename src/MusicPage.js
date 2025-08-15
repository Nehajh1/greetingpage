import React, { useRef } from "react";
import "./music.css";
import fluteImage from "./assets/flute.png";
import fluteSound from "./assets/music.mp3";
import fluteSound1 from "./assets/music2.mp3";
import fluteSound2 from "./assets/music3.mp3";
import fluteSound3 from "./assets/music4.mp3";
import fluteSound4 from "./assets/music5.mp3";

export default function MusicPage() {
  const audioRef = useRef(null);

  const playSound = (src) => {
    if (audioRef.current.src.includes(src) && !audioRef.current.paused) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = src;
      audioRef.current.play();
    }
  };

  return (
    <div className="bhajan-container">
      <h1>🎵 Bhajan Sandhya</h1>

      <img
        src={fluteImage}
        alt="Flute"
        className="flute-image"
      />
      <p className="flute-text">Click the flute for soothing melody</p>

      <div className="song-list">
        <button onClick={() => playSound(fluteSound)}>🌸 Krishna Song 1</button>
        <button onClick={() => playSound(fluteSound1)}>🌸 Krishna Song 2</button>
        <button onClick={() => playSound(fluteSound2)}>🌸 Krishna Song 3</button>
        <button onClick={() => playSound(fluteSound3)}>🌸 Krishna Song 4</button>
        <button onClick={() => playSound(fluteSound4)}>🌸 Krishna Song 5</button>
      </div>

      <audio ref={audioRef} loop />
    </div>
  );
}
