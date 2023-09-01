import { useEffect, useState } from "react";
import { getIssues } from "../apis/issues";
import { ADV_LINK_URL, ISSUES_PER_PAGE } from "../utils/constants";
import { IssuesResponse } from "../utils/types";

const useIssue = () => {
  const [owner, setOwner] = useState<string>("facebook");
  const [repo, setRepo] = useState<string>("react");
  const [issueList, setIssueList] = useState<IssuesResponse[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNo, setpageNo] = useState<number>(1);
  const [isPageEnd, setIsPageEnd] = useState(false);

  const filterPureIssue = (data: IssuesResponse[]) =>
    data.filter((issue) => !issue.pull_request);
  const updateIssueList = (newData: IssuesResponse[]) => {
    setIssueList([...issueList, ...newData]);
    return;
  };
  const getIssueList = (data: IssuesResponse[]) => {
    setIssueList(data);
    return;
  };
  const isSelectClick = () => {
    setpageNo(1);
    return 1;
  };

  const getIssuesApiCall = async (mode: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const requestPageNo = mode === "select" ? isSelectClick() : pageNo;

      const res = await getIssues(owner, repo, requestPageNo);
      if (res.status === 200) {
        setIsLoading(false);
        setIsPageEnd(res.data.length < ISSUES_PER_PAGE);

        if (requestPageNo !== 1) {
          updateIssueList(filterPureIssue(res.data));
        } else {
          getIssueList(filterPureIssue(res.data));
        }
        setpageNo(pageNo + 1);
        return;
      }
      throw Error;
    } catch (err) {
      setIsError(true);
      console.error(err);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  const isAdvView = (idx: number) => {
    return (idx + 1) % 5 === 0;
  };

  const handleAdvClick = () => {
    window.open(ADV_LINK_URL);
    return;
  };

  useEffect(() => {
    getIssuesApiCall("scroll");
  }, []);

  return {
    owner,
    setOwner,
    repo,
    setRepo,
    issueList,
    isError,
    setIsError,
    isLoading,
    setIsLoading,
    getIssuesApiCall,
    isAdvView,
    handleAdvClick,
    isPageEnd,
  };
};

export default useIssue;
