import { useState } from "react";
import Home from "./pages/Home";
import SoloGame from "./components/SoloGame";
import Winner from "./components/Winner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restart from "./components/Restart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Restart /> */}
      {/* <Winner /> */}
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
