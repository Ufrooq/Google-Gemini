import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

let _limit = 5;

const Sidebar = () => {
  const { prevPrompts, onSent, newChat } = useContext(GlobalContext);
  const [expanded, setexpanded] = useState(false);
  const [showmore, setshowmore] = useState(false);

  const handleDropdown = () => {
    _limit = prevPrompts.length;
    setshowmore(!showmore);
  };

  return (
    <div
      className={`z-20 min-h-[100vh] bg-slate-100 py-4 flex flex-col items-center justify-between ${
        expanded ? "w-[280px] px-6" : "w-[70px]"
      }`}
      style={{
        transition: "width 0.3s ease, padding 0.3s ease",
      }}
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
          onClick={newChat}
          className={`${
            expanded
              ? "icon_btn  gap-2 px-4 flex justify-between w-36 rounded-[20px] bg-slate-200"
              : "icon_btn"
          }`}
        >
          <i className="fa-solid fa-plus" style={{ fontSize: "1.2rem" }}></i>
          <span className={`font-base ${expanded ? "block" : "hidden"}`}>
            New Chat
          </span>
        </button>
        <div className={`${expanded ? "block" : "hidden"} w-full mt-6`}>
          <p className="pl-3 pb-6">Recent</p>
          <ul
            className={`w-full h-[30vh] pr-2 ${
              showmore ? "overflow-y-scroll" : "overflow-hidden"
            }`}
          >
            {prevPrompts?.slice(0, _limit).map((prompt, key) => (
              <li
                onClick={() => onSent(prompt)}
                key={key}
                className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis w-full flex items-center gap-4 px-4 py-2 rounded-[20px] cursor-pointer hover:bg-blue-100"
              >
                <i
                  className="fa-regular fa-note-sticky"
                  style={{ fontSize: "1rem" }}
                ></i>
                {prompt.slice(0, 20)}...
              </li>
            ))}
          </ul>
          <button
            onClick={handleDropdown}
            className="w-full text-sm flex gap-4 items-center px-4 py-2 rounded-[20px] cursor-pointer hover:bg-slate-200"
          >
            <i
              className={`fa-solid fa-angle-down ${
                showmore ? "rotate-180" : "rotate-0"
              }`}
            ></i>
            Show {showmore ? "less" : "more"}
          </button>
        </div>
      </div>
      <div className={`flex flex-col justify-start w-full`}>
        <button
          className={`${
            expanded ? "rounded-[20px] justify-start" : "w-full justify-center"
          } icon_btn gap-4 bg-transparent mt-0 hover:scale-100 hover:bg-slate-200 p-0`}
        >
          <i
            className="fa-solid fa-circle-info"
            style={{ fontSize: "1.3rem" }}
          ></i>
          {expanded ? "Help" : ""}
        </button>
        <button
          className={`${
            expanded ? "rounded-[20px] justify-start" : "w-full justify-center"
          } icon_btn mt-2 gap-4 bg-transparent hover:scale-100 hover:bg-slate-200 p-0`}
        >
          <i className="fa-solid fa-gear" style={{ fontSize: "1.3rem" }}></i>
          {expanded ? "Settings" : ""}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
