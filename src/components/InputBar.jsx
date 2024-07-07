import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { toast } from "sonner";

const InputBar = () => {
  const { onSent, prompt, setprompt, showOutputControls } =
    useContext(GlobalContext);

  const handleSendPrompt = async (e) => {
    e.preventDefault();
    if (prompt != " ") {
      await onSent(prompt);
      return;
    }
    toast.error("Please Enter a prompt");
  };

  return (
    <div className="w-full flex justify-center relative bg-white">
      <div className="fixed bottom-0 w-[60%] bg-white">
        <form
          onSubmit={handleSendPrompt}
          className="flex justify-between px-6 py-3 shadow-2xl rounded-[50px] bg-slate-100 overflow-hidden"
        >
          <input
            className="w-full text-base bg-transparent outline-none  disabled:cursor-not-allowed"
            type="text"
            placeholder="Enter a prompt here"
            value={prompt}
            onChange={(e) => setprompt(e.target.value)}
            disabled={showOutputControls}
          />
          <div className="flex gap-1 items-center">
            <button className="input_btn">
              <i
                class="fa-regular fa-images"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </button>
            <button className="input_btn">
              <i
                class="fa-solid fa-microphone-lines"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </button>
            <button
              type="submit"
              className={`input_btn transition ${prompt ? "" : "hidden"}`}
            >
              <i
                class="fa-regular fa-paper-plane"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </button>
          </div>
        </form>
        <p className="text-[0.7rem] text-center py-4">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy & Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default InputBar;
