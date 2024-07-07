import { useState } from "react";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox";
import InputBar from "./components/InputBar";
import { Toaster } from "sonner";
function App() {
  return (
    <div className="w-full flex gap-2">
      <Sidebar />
      <div className="w-full">
        <Toaster richColors closeButton />
        <Navbar />
        <MainBox />
        <InputBar />
      </div>
    </div>
  );
}

export default App;
