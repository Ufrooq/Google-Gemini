import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Loader from "./Loader";

const MainBox = () => {
  const {
    show,
    setshow,
    showResult,
    quick_links,
    showEditBox,
    setshowEditBox,
    prompt,
    responseData,
    recentPrompt,
    isLoading,
  } = useContext(GlobalContext);

  const handleUpdate = () => {
    setshowEditBox(true);
  };
  return (
    <div className="p-5 w-full max-h-[90vh] relative overflow-y-scroll">
      <div className="w-[60%] h-full mx-auto">
        {!showResult ? (
          <>
            <h1 className="font-semibold text-6xl pt-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                Hello, Umar!
              </span>
            </h1>
            <h1 className="mt-4 font-semibold text-6xl text-gray-300">
              How can I help you today ?
            </h1>
            <div className="w-full gap-3 flex mt-20">
              {quick_links.map((link, key) => (
                <div
                  key={key}
                  className="w-full flex h-[200px] flex-col justify-between flex-grow-1 cursor-pointer rounded-[10px] p-5 bg-slate-100 hover:bg-slate-200 transition shadow-sm"
                >
                  <p className="text-[0.9rem]">{link[1]}</p>
                  <button className="ms-auto">
                    <i class={`fa-solid fa-${link[0]}`}></i>
                  </button>
                </div>
              ))}
            </div>
            {show && (
              <div className="mt-8 mb-32 flex flex-col rounded-[10px] p-4 justify-between gap-10 bg-gray-100">
                <p className="text-[0.9rem] leading-6">
                  Humans review some saved chats to improve Google AI. To stop
                  this for future chats, turn off Gemini Apps Activity. If this
                  setting is on, don't enter info you wouldn’t want reviewed or
                  used. How it works
                </p>
                <div className="flex items-center gap-2 ms-auto">
                  <button className="px-4 py-2 rounded-[20px] text-indigo-500 hover:bg-blue-100 transition">
                    Manage Activity
                  </button>
                  <button
                    onClick={() => setshow(false)}
                    className="px-4 py-2 rounded-[20px] text-indigo-500 hover:bg-blue-100 transition"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full mt-5">
            <div
              className={`flex items-${showEditBox ? "start" : "center"} gap-4`}
            >
              <i class="fa-regular fa-circle-user text-3xl mt-1"></i>
              {!showEditBox ? (
                <p className="leading-7 text-sm">{recentPrompt}</p>
              ) : (
                <div className="w-full flex flex-col gap-4">
                  <input
                    className="w-full border-2 border-blue-600 outline-blue-600 bg-blue-50 text-sm px-4 py-4 rounded-[6px]"
                    type="text"
                    name=""
                    id=""
                    value={"What is DSA?"}
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setshowEditBox(!showEditBox)}
                      className="px-4 py-2 rounded-[20px] text-blue-700 hover:bg-slate-100 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setshowEditBox(false)}
                      className="px-4 py-2 rounded-[20px] text-white bg-blue-500 hover:opacity-90 transition"
                    >
                      Update
                    </button>
                  </div>
                </div>
              )}
              <button
                onClick={() => setshowEditBox(!showEditBox)}
                className="w-9 h-8 mt-1 rounded-[50%] flex justify-center items-center bg-slate-200"
              >
                <i class="fa-regular fa-pen-to-square text-sm"></i>
              </button>
            </div>
            <div className="w-full items-start gap-4 flex mt-10 mb-32">
              <img
                className="scale-125"
                src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                alt=""
              />
              {!isLoading ? (
                <div className="p-4 bg-slate-100 rounded-[10px] w-full">
                  <p
                    className="text-justify leading-7"
                    dangerouslySetInnerHTML={{ __html: responseData }}
                  ></p>
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBox;
