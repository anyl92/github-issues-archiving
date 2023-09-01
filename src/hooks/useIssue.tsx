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
  const [isSelected, setIsSelected] = useState<boolean>(false);

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
        setIsSelected(mode === "select");
        return;
      }
      throw Error;
    } catch (err) {
      setIsError(true);
      setIssueList([]);
      console.error(err);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIssuesApiCall("scroll");
  }, []);

  const isAdvView = (idx: number) => {
    return (idx + 1) % 4 === 0;
  };

  const handleAdvClick = () => {
    window.open(ADV_LINK_URL);
    return;
  };

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
    isSelected,
  };
};

export default useIssue;
