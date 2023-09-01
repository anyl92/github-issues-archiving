import { styled } from "styled-components";
import Select from "../components/Issues/Select";
import IssueList from "../components/Issues/IssueList";
import IssueListError from "../components/Issues/IssueListError";

import Loading from "../components/Loading";
import { useIssuesContext } from "../hooks/useIssuesContext";
import { useCallback, useEffect, useRef } from "react";

const MainPage = () => {
  const { isError, isLoading, isPageEnd, getIssuesApiCall, issueList } =
    useIssuesContext();

  const loadMoreRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    getIssuesApiCall("scroll");
  }, []);

  return (
    <Wrapper>
      <Select />
      {isError && <IssueListError />}
      <IssueList />
      {isLoading && <Loading />}
      {!isPageEnd && !isLoading && !isError && (
        <LoadMoreBox ref={loadMoreRef}>more</LoadMoreBox>
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
