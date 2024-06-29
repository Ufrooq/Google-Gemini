import React, { useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <div className="w-full flex justify-between items-center px-6 py-2 mt-4 relative">
      <div className="flex gap-2 items-center rounded-[6px] px-3 py-1 hover:bg-slate-200 cursor-pointer">
        <span
          className="text-xl text-slate-800"
          onClick={() => setshowModal(!showModal)}
        >
          Gemini
        </span>
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div className="flex items-center gap-4">
        <button className="group flex gap-2 items-center rounded-[6px] px-4 py-2 bg-slate-200 cursor-pointer transition">
          <img
            className="group-hover:scale-125 transition"
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg"
            alt=""
          />
          <span className="text-sm">Try Gemini Advanced</span>
        </button>
        <button className="transition w-8 h-8 flex items-center rounded-[50%] bg-slate-200 justify-center hover:bg-slate-300 cursor-pointer">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div></div>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default Navbar;
