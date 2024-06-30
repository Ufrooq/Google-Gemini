import React from "react";

const InputBar = () => {
  return (
    <div className="w-full flex justify-center relative bg-white">
      <div className="fixed bottom-0 w-[60%] bg-white">
        <div className="flex justify-between px-6 py-3 shadow-2xl rounded-[50px] bg-slate-100">
          <input
            className="w-full text-base bg-transparent outline-none"
            type="text"
            placeholder="Enter a prompt here"
          />
          <div className="flex gap-1 items-center">
            <button className="w-12 h-12 rounded-[50%] flex items-center justify-center hover:bg-slate-200 transition">
              <i
                class="fa-regular fa-images"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </button>
            <button className="w-12 h-12 rounded-[50%] flex items-center justify-center hover:bg-slate-200 transition">
              <i
                class="fa-solid fa-microphone-lines"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </button>
          </div>
        </div>
        <p className="text-[0.7rem] text-center py-4">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy & Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default InputBar;
