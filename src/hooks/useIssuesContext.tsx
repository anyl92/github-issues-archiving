import { useContext } from "react";
import { IssuesContext } from "../store/IssuesContext";

export const useIssuesContext = () => {
  const context = useContext(IssuesContext);
  if (context === null) {
    throw Error("FormContext is null!");
  }
  return context;
};
