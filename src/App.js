import React from "react";
import {Route, Routes, Navigate } from "react-router-dom";
import GreetingPage from "./GreetingPage";
import MusicPage from "./MusicPage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route path="/MusicPage" element={<MusicPage />} />
         <Route path="*" element={<Navigate to="/" replace />} /> {/* fallback */}
      </Routes>
  );
}

export default App;
