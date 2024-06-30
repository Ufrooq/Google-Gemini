import { useState } from "react";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox";
import InputBar from "./components/InputBar";
function App() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div>
        <Navbar />
        <MainBox />
        <InputBar />
      </div>
    </div>
  );
}

export default App;
