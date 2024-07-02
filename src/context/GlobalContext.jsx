import runChat from "../config/gemini";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = (props) => {
  const [prompt, setprompt] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompts, setprevPrompts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [responseData, setresponseData] = useState("");
  const [showResult, setshowResult] = useState(false);
  const [showEditBox, setshowEditBox] = useState(false);
  const [show, setshow] = useState(true);
  let headings = [];
  let paragraphs = [];
  const quick_links = [
    ["pencil", "Revise my writing and fix my grammar"],
    ["lightbulb", "Help me sound like an expert for an upcoming trip"],
    ["utensils", "Find hotels for a New Year’s trip to San Francisco"],
    ["lightbulb", "Explain the key rules of rugby, starting with the basics"],
  ];

  const formatResponse = (res) => {
    if (res.startsWith("##")) {
      res = res.slice(2);
    }
    // Replace text between ** with <br/> tags for bold
    let formattedText = res.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    // Replace single * with a new line
    formattedText = formattedText.replace(/\*/g, "<br/>");

    // Add a line break after every colon and question mark
    formattedText = formattedText.replace(/:/g, ":<br/>");
    formattedText = formattedText.replace(/\?/g, "?<br/>");

    // Add a line break before the text appearing before a colon or question mark up to the previous full stop
    formattedText = formattedText.replace(/(\. )(.*?):/g, ".<br/>$4:");
    formattedText = formattedText.replace(/(\. )(.*?)\?/g, ".<br/>$4?");
    return formattedText;
    // return res;
  };

  const onSent = async (prompt) => {
    setrecentPrompt(prompt);
    setisLoading(true);
    setshowResult(true);
    setprompt("");
    const response = await runChat(prompt);
    const forText = formatResponse(response);
    setresponseData(forText);
    setisLoading(false);
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
    setshow,
    showEditBox,
    setshowEditBox,
    headings,
    paragraphs,

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
