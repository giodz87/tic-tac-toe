import { useState } from "react";
import Home from "./pages/Home";
import SoloGame from "./pages/SoloGame";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [vsComputer, setVsComputer] = useState(false);
  const [players, setPlayers] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home comingSoon={comingSoon} setComingSoon={setComingSoon} />
            }
          />
          <Route path="/:soloGame" element={<SoloGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
