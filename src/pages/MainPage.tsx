import { useEffect } from "react";
import { styled } from "styled-components";
import Select from "../components/Select";
import IssueList from "../components/IssueList";
import useIssue from "../hooks/useIssue";
import IssueListError from "../components/IssueListError";

const MainPage = () => {
  const {
    getIssuesApiCall,
    owner,
    setOwner,
    repo,
    setRepo,
    issueList,
    isError,
  } = useIssue();

  useEffect(() => {
    getIssuesApiCall();
  }, []);

  return (
    <Wrapper>
      <Select
        owner={owner}
        setOwner={setOwner}
        repo={repo}
        setRepo={setRepo}
        getIssuesApiCall={getIssuesApiCall}
      />
      {isError ? <IssueListError /> : <IssueList issueList={issueList} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export default MainPage;
