import React from "react";
import {Route, Routes, Navigate } from "react-router-dom";
import GreetingPage from "./GreetingPage";
import MusicPage from "./MusicPage";
import HandiPage from "./HandiPage";
import DancePage from "./DancePage";
import Kanha from "./kanha";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route path="/MusicPage" element={<MusicPage />} />
         <Route path="/dahi-handi" element={<HandiPage />} />
         <Route path="/raas-leela" element={<DancePage/>}/>
         <Route path="/kanha" element={<Kanha/>}/>
         <Route path="*" element={<Navigate to="/" replace />} /> {/* fallback */}
      </Routes>
  );
}

export default App;
