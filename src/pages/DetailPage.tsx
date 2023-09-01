import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import IssueBody from "../components/IssueDetail/IssueBody";
import IssueTitle from "../components/IssueDetail/IssueTitle";
import Loading from "../components/Loading";
import { useIssuesContext } from "../hooks/useIssuesContext";
import { IssuesResponse } from "../utils/types";
import { getIssueDetail } from "../apis/issues";

const IssueDetailPage = () => {
  const { owner, repo } = useIssuesContext();
  const [item, setItem] = useState<IssuesResponse>();

  const params = useParams();

  const getIssueDetailApiCall = async () => {
    if (params.number) {
      const res = await getIssueDetail(owner, repo, params.number);

      setItem({
        number: res.number,
        title: res.title,
        body: res.body,
        created_at: res.created_at,
        comments: res.comments,
        user: {
          login: res.user.login,
          avatar_url: res.user.avatar_url,
        },
        pull_request: res.pull_request,
      });
    }
  };

  useEffect(() => {
    getIssueDetailApiCall();
  }, []);

  return item ? (
    <OuterWrapper>
      <InnerWrapper>
        <IssueTitle {...item} />
        <IssueBody {...item} />
      </InnerWrapper>
    </OuterWrapper>
  ) : (
    <Loading />
  );
};

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 18px 25px;
  border: 0.5px solid gray;
  border-radius: 10px;
  background-color: white;
`;

export default IssueDetailPage;
