import React from "react";

const Modal = () => {
  return (
    <div className="transition w-[320px] h-[110px] py-2 flex flex-col bg-slate-200 absolute top-14 left-8 rounded-[10px] shadow-lg">
      <div className="group flex h-full px-3 gap-2 items-center justify-between cursor-pointer transition hover:bg-slate-300">
        <div className="flex items-center gap-4">
          <img
            className="group-hover:scale-125 transition"
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg"
            style={{ width: "20px" }}
            alt=""
          />
          <span className="text-md">Gemini</span>
        </div>
        <i className="fa-regular fa-circle-check mr-6 text-xl"></i>
      </div>
      <div className="group flex h-full px-3 gap-2 items-center justify-between cursor-pointer transition hover:bg-slate-300">
        <div className="flex items-center gap-4">
          <img
            className="group-hover:scale-125 transition"
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
            style={{ width: "20px" }}
            alt=""
          />
          <span className="text-md">Gemini Advanced</span>
        </div>
        <button className="text-sm px-2 py-2 bg-slate-50 rounded">
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default Modal;
