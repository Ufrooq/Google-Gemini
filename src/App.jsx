import { useState } from "react";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox";
function App() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <MainBox />
      </div>
    </div>
  );
}

export default App;
