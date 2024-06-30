import runChat from "../config/gemini";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = (props) => {
  const [prompt, setprompt] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompts, setprevPrompts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [responseData, setresponseData] = useState("");
  const [showResult, setshowResult] = useState(false);
  const [show, setshow] = useState(true);
  const quick_links = [
    ["pencil", "Revise my writing and fix my grammar"],
    ["lightbulb", "Help me sound like an expert for an upcoming trip"],
    ["utensils", "Find hotels for a New Year’s trip to San Francisco"],
    ["lightbulb", "Explain the key rules of rugby, starting with the basics"],
  ];

  const onSent = async (prompt) => {
    const response = await runChat(prompt);
    return response;
  };
  const contextValue = {
    //states
    prompt,
    setprompt,
    recentPrompt,
    setrecentPrompt,
    prevPrompts,
    setprevPrompts,
    isLoading,
    setisLoading,
    responseData,
    showResult,
    quick_links,
    show,

    //functions
    onSent,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
