import { createContext, PropsWithChildren } from "react";

import useIssue from "../hooks/useIssue";
import { IssuesContextType } from "../utils/types";

export const IssuesContext = createContext<IssuesContextType | null>(null);

export function IssuesProvider({ children }: PropsWithChildren) {
  const issueState = useIssue();
  return (
    <IssuesContext.Provider value={{ ...issueState }}>
      {children}
    </IssuesContext.Provider>
  );
}
