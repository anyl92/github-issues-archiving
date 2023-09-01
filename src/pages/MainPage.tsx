import { styled } from "styled-components";
import Select from "../components/Select";
import IssueList from "../components/IssueList";
import IssueListError from "../components/IssueListError";

import Loading from "../components/Loading";
import { useIssuesContext } from "../hooks/useIssuesContext";
import { useCallback, useEffect, useRef } from "react";

const MainPage = () => {
  const { isError, isLoading, isPageEnd, getIssuesApiCall, issueList } =
    useIssuesContext();

  const loadMoreRef = useRef(null);
  const handleObserver = useCallback(
    async (
      [entry]: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      await getIssuesApiCall("scroll");
      observer.observe(entry.target);
    },
    [issueList]
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(handleObserver);
    loadMoreRef.current && observer.observe(loadMoreRef.current);
    return () => observer && observer.disconnect();
  }, [handleObserver]);

  return (
    <Wrapper>
      <Select />
      {isError && <IssueListError />}
      <IssueList />
      {isLoading && <Loading />}
      {!isPageEnd && !isLoading && (
        <LoadMoreBox ref={loadMoreRef}></LoadMoreBox>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const LoadMoreBox = styled.div`
  visibility: hidden;
`;

export default MainPage;
