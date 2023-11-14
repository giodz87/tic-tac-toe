import { useState } from "react";
import Home from "./pages/Home";
import SoloGame from "./pages/SoloGame";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:soloGame" element={<SoloGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
