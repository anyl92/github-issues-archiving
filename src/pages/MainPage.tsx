import { useContext, useEffect } from "react";
import { styled } from "styled-components";
import Select from "../components/Select";
import IssueList from "../components/IssueList";
import useIssue from "../hooks/useIssue";
import IssueListError from "../components/IssueListError";

import { createContext } from "react";
import { IssuesContextType } from "../utils/types";

const IssuesContext = createContext<IssuesContextType | null>(null);

export const IssuesProvider = ({ children }: any) => {
  const issueState = useIssue();
  return (
    <IssuesContext.Provider value={{ ...issueState }}>
      {children}
    </IssuesContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(IssuesContext);
  if (context === null) {
    throw Error("FormContext is null!");
  }
  return context;
};

const MainPage = () => {
  const { getIssuesApiCall, isError } = useFormContext();

  useEffect(() => {
    getIssuesApiCall();
  }, []);

  return (
    <Wrapper>
      <Select />
      {isError ? <IssueListError /> : <IssueList />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export default MainPage;
