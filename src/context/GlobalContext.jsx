import { createContext } from "react";

export const GlobalContext = createContext();

const ContextProvider = (props) => {
  const contextValue = {};

  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
};
export default ContextProvider;
