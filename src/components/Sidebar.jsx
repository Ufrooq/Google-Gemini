import React, { useState } from "react";

const Sidebar = () => {
  const [expanded, setexpanded] = useState(false);

  const words = [
    "happy",
    "sad",
    "angry",
    "tired",
    "hungry",
    "book",
    "computer",
    "phone",
    "music",
    "movie",
    "movie",
    "movie",
    "movie",
    "movie",
    "movie",
    "movie",
    "movie",
  ];
  return (
    <div
      className={`bg-slate-100 py-4 flex flex-col items-start justify-between h-[100vh] custom_ani ${
        expanded ? "w-[280px] pl-4 " : "w-[70px]"
      }`}
    >
      <div
        className={`flex flex-col ${expanded ? "items-start" : "items-center"}`}
      >
        <button
          onClick={() => setexpanded(!expanded)}
          className="icon_btn bg-transparent mt-0 hover:scale-100 hover:bg-slate-200 p-8"
        >
          <i className="fa-solid fa-bars" style={{ fontSize: "1.3rem" }}></i>
        </button>
        <button
          className={`${
            expanded
              ? "icon_btn px-4 flex justify-between w-32 rounded-[20px] bg-slate-200"
              : "icon_btn"
          }`}
        >
          <i class="fa-solid fa-plus" style={{ fontSize: "1.2rem" }}></i>
          <span className={`${expanded ? "block" : "hidden"}`}>New Chat</span>
        </button>
        <div
          className={`${
            expanded ? "block" : "hidden"
          } custom_ani duration-1000`}
        >
          <p>Recent</p>
          <ul className="w-[280px] h-[50vh] relative overflow-y-scroll">
            {words?.map((word) => (
              <li className="w-full flex items-center gap-4 px-5 py-2 rounded-[20px] cursor-pointer hover:bg-blue-100">
                <i
                  // class="fa-regular fa-message"
                  class="fa-regular fa-note-sticky"
                  style={{ fontSize: "1rem" }}
                ></i>
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`flex flex-col w-full ${
          expanded ? "items-start" : "items-center"
        }`}
      >
        <button className="icon_btn bg-transparent mt-0 hover:scale-100 hover:bg-slate-200 p-5">
          <i class="fa-solid fa-circle-info" style={{ fontSize: "1.1rem" }}></i>
        </button>
        <button className="icon_btn bg-transparent mt-0 hover:scale-100 hover:bg-slate-200 p-5">
          <i class="fa-solid fa-gear" style={{ fontSize: "1.1rem" }}></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
