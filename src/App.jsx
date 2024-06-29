import { useState } from "react";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
