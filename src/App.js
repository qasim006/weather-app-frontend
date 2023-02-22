import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Landing } from "./Pages/Landing";
import { HotAndNot } from "./Pages/HotAndNot";
import { FreezeAndFlee } from "./Pages/FreezeAndFlee";

function App() {
  return (
    <div className="parentContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hotAndNot" element={<HotAndNot />} />
        <Route path="/freezeAndFlee" element={<FreezeAndFlee />} />
      </Routes>
    </div>
  );
}

export default App;
