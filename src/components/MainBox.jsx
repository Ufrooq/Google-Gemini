import React from "react";
import InputBar from "./InputBar";

const MainBox = () => {
  const quick_links = [
    ["pencil", "Revise my writing and fix my grammar"],
    ["lightbulb", "Help me sound like an expert for an upcoming trip"],
    ["utensils", "Find hotels for a New Year’s trip to San Francisco"],
    ["lightbulb", "Explain the key rules of rugby, starting with the basics"],
  ];

  return (
    <div className="p-5 w-full h-full">
      <div className="w-[60%] mx-auto mt-8">
        <h1 className="font-semibold text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
            Hello, Umar!
          </span>
        </h1>
        <h1 className="mt-4 font-semibold text-5xl text-gray-300">
          How can I help you today ?
        </h1>
        <div className="w-full gap-3 flex mt-12">
          {quick_links.map((link) => (
            <div className="w-full flex h-[200px] flex-col justify-between flex-grow-1 cursor-pointer rounded-[10px] p-5 bg-slate-100 hover:bg-slate-200 transition shadow-sm">
              <p className="text-[0.9rem]">{link[1]}</p>
              <button className="ms-auto">
                <i class={`fa-solid fa-${link[0]}`}></i>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col rounded-[10px] p-4 justify-between gap-10 bg-gray-100">
          <p className="text-[0.9rem] leading-6">
            Humans review some saved chats to improve Google AI. To stop this
            for future chats, turn off Gemini Apps Activity. If this setting is
            on, don't enter info you wouldn’t want reviewed or used. How it
            works
          </p>
          <div className="flex items-center gap-2 ms-auto">
            <button className="px-4 py-2 rounded-[20px] text-indigo-500 hover:bg-blue-100 transition">
              Manage Activity
            </button>
            <button className="px-4 py-2 rounded-[20px] text-indigo-500 hover:bg-blue-100 transition">
              Dismiss
            </button>
          </div>
        </div>
        <InputBar />
      </div>
    </div>
  );
};

export default MainBox;
