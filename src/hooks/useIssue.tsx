import { useState } from "react";
import { getIssues } from "../apis/issues";
import { ADV_LINK_URL } from "../utils/constants";
import { getIssuesResponse } from "../utils/types";

const useIssue = () => {
  const [owner, setOwner] = useState<string>("facebook");
  const [repo, setRepo] = useState<string>("react");
  const [issueList, setIssueList] = useState<getIssuesResponse[] | undefined>();
  const [isError, setIsError] = useState<boolean>(false);

  const getIssuesApiCall = async () => {
    try {
      setIsError(false);
      const res = await getIssues(owner, repo);
      if (res.status === 200) return setIssueList(res?.data);
      throw Error;
    } catch (err) {
      setIsError(true);
      console.error(err);
      return;
    }
  };

  const isAdvView = (idx: number) => {
    return (idx + 1) % 5 === 0;
  };
  const handleAdvClick = () => {
    window.open(ADV_LINK_URL);
    return;
  };

  return {
    getIssuesApiCall,
    issueList,
    owner,
    setOwner,
    repo,
    setRepo,
    isAdvView,
    handleAdvClick,
    isError,
  };
};

export default useIssue;
