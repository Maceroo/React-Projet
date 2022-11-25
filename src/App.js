import React from "react";
import Norris from "./pages/Norris";
import Donald from "./pages/Donald";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Tronald Dump" element={<Donald />} />
        <Route path="*" element={<Norris />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
