import { IssuesResponse } from "../utils/types";
import { ADV_IMG_SRC, ADV_IMG_ALT } from "../utils/constants";
import { styled } from "styled-components";
import { useFormContext } from "../pages/MainPage";

const IssueList = () => {
  const { issueList, isAdvView, handleAdvClick } = useFormContext();

  return (
    <>
      {issueList?.map((issue: IssuesResponse, idx: number) => (
        <div key={idx}>
          <IssuesWrapper>
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
            <img src={ADV_IMG_SRC} alt={ADV_IMG_ALT} onClick={handleAdvClick} />
          )}
        </div>
      ))}
    </>
  );
};

const IssuesWrapper = styled.div`
  margin: 20px 0;
`;

export default IssueList;
