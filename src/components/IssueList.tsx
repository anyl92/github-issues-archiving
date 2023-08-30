import useIssue from "../hooks/useIssue";
import { ADV_IMG_SRC, ADV_IMG_ALT } from "../utils/constants";
import { styled } from "styled-components";

type IssueListProps = {
  issueList: [];
};

const IssueList = ({ issueList }: IssueListProps) => {
  const { isAdvView, handleAdvClick } = useIssue();

  return (
    <>
      {issueList?.map((el: any, idx: number) => (
        <>
          <IssuesWrapper>
            <div>
              <span>Number: </span>
              {el.number}
            </div>
            <div>
              <span>Title: </span>
              {el.title}
            </div>
            <div>
              <span>User: </span>
              {el.user.login}
            </div>
            <div>
              <span>Created date: </span>
              {el.created_at}
            </div>
            <div>
              <span>Comments count: </span>
              {el.comments}
            </div>
          </IssuesWrapper>
          {isAdvView(idx) && (
            <img src={ADV_IMG_SRC} alt={ADV_IMG_ALT} onClick={handleAdvClick} />
          )}
        </>
      ))}
    </>
  );
};

const IssuesWrapper = styled.div`
  margin: 20px 0;
`;

export default IssueList;
