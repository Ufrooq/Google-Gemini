import runChat from "../config/gemini";
import { createContext, useState } from "react";
import { quick_links } from "../constants/quickLinks";

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
  const [copied, setcopied] = useState(false);

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
    formattedText = formattedText.replace(/(\. )(.*?):/g, ".<br/>$2:");
    formattedText = formattedText.replace(/(\. )(.*?)\?/g, ".<br/>$2?");
    return formattedText;
    // return res;
  };

  let timeoutId;
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setcopied(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setcopied(false);
        timeoutId = null;
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const onSent = async (prompt) => {
    setrecentPrompt(prompt);
    setisLoading(true);
    setshowResult(true);
    setprompt("");
    const response = await runChat(prompt);
    const formattedText = formatResponse(response);
    setresponseData(formattedText);

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
    copied,
    setcopied,

    //functions
    onSent,
    copyToClipboard,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
