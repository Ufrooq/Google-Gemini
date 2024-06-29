import React from "react";

const InputBar = () => {
  return (
    <div className="mt-6 w-full px-6 py-4 rounded-[30px] bg-slate-100">
      <input
        className="text-base bg-transparent outline-none"
        type="text"
        placeholder="Enter a prompt here"
      />
    </div>
  );
};

export default InputBar;
