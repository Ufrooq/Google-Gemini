import React, { useState } from "react";

let _limit = 5;
const Sidebar = () => {
  const [expanded, setexpanded] = useState(false);
  const [showmore, setshowmore] = useState(false);
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

  const handleDropdown = () => {
    _limit = words.length;
    setshowmore(!showmore);
  };

  return (
    <div
      className={`z-20 min-h-[100vh] bg-slate-100 py-4 flex flex-col items-center justify-between ${
        expanded ? "w-[280px] pl-4 " : "w-[70px]"
      }`}
    >
      <div
        className={`flex flex-col w-full ${
          expanded ? "items-start" : "items-center"
        }`}
      >
        <button
          onClick={() => setexpanded(!expanded)}
          className="icon_btn bg-transparent mt-0 hover:scale-100 hover:bg-slate-200 p-6"
        >
          <i className="fa-solid fa-bars" style={{ fontSize: "1.3rem" }}></i>
        </button>
        <button
          className={`${
            expanded
              ? "icon_btn  gap-2 px-4 flex justify-between w-36 rounded-[20px] bg-slate-200"
              : "icon_btn"
          }`}
        >
          <i class="fa-solid fa-plus" style={{ fontSize: "1.2rem" }}></i>
          <span className={`font-base ${expanded ? "block" : "hidden"}`}>
            New Chat
          </span>
        </button>
        <div className={`${expanded ? "block" : "hidden"} w-full mt-6 `}>
          <p className="pl-3 pb-6">Recent</p>
          <ul
            className={`w-full h-[30vh] pr-2 ${
              showmore ? "overflow-y-scroll" : "overflow-hidden"
            }`}
          >
            {words?.slice(0, _limit).map((word, key) => (
              <li
                key={key}
                className="w-full flex items-center gap-4 px-4 py-2 rounded-[20px] cursor-pointer hover:bg-blue-100"
              >
                <i
                  // class="fa-regular fa-message"
                  class="fa-regular fa-note-sticky"
                  style={{ fontSize: "1rem" }}
                ></i>
                {word}
              </li>
            ))}
          </ul>
          <button
            onClick={handleDropdown}
            className="w-full text-sm flex gap-4 items-center px-4 py-2 rounded-[20px] cursor-pointer hover:bg-slate-200 "
          >
            <i
              class={`fa-solid fa-angle-down ${
                showmore ? "rotate-180" : "rotate-0"
              }`}
            ></i>
            Show {showmore ? "less" : "more"}
          </button>
        </div>
      </div>
      <div className={`flex flex-col justify-start w-full me-4`}>
        <button
          className={`${
            expanded ? "rounded-[20px]" : ""
          } icon_btn justify-start w-full gap-4 bg-transparent mt-0 hover:scale-100 hover:bg-slate-200 p-5`}
        >
          <i class="fa-solid fa-circle-info" style={{ fontSize: "1.2rem" }}></i>
          {expanded ? "Help" : ""}
        </button>
        <button
          className={`${
            expanded ? "rounded-[20px]" : ""
          } icon_btn justify-start w-full gap-4 bg-transparent mt-0 hover:scale-100 hover:bg-slate-200 p-5`}
        >
          <i class="fa-solid fa-gear" style={{ fontSize: "1.2rem" }}></i>
          {expanded ? "Settings" : ""}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
