import { IssuesResponse } from "../../utils/types";
import { ADV_IMG_SRC, ADV_IMG_ALT } from "../../utils/constants";
import { styled } from "styled-components";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useNavigate } from "react-router-dom";

const IssueList = () => {
  const { issueList, isAdvView, handleAdvClick } = useIssuesContext();
  const navigate = useNavigate();

  return (
    <>
      {issueList?.map((issue: IssuesResponse, idx: number) => (
        <div key={idx}>
          <IssuesWrapper onClick={() => navigate(`/issue/${issue.number}`)}>
            <div>
              <span>Number: </span>
              {issue.number}
            </div>
            <div>
              <span>Title: </span>
              {issue.title}
            </div>
            <div>
              <span>User: </span>
              {issue.user.login}
            </div>
            <div>
              <span>Created date: </span>
              {issue.created_at}
            </div>
            <div>
              <span>Comments count: </span>
              {issue.comments}
            </div>
          </IssuesWrapper>
          {isAdvView(idx) && (
            <AdvImg
              src={ADV_IMG_SRC}
              alt={ADV_IMG_ALT}
              onClick={handleAdvClick}
            />
          )}
        </div>
      ))}
    </>
  );
};

const IssuesWrapper = styled.div`
  margin: 20px 0;
  cursor: pointer;
`;

const AdvImg = styled.img`
  cursor: pointer;
`;

export default IssueList;
