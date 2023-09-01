import * as S from "./IssueDetail.styled";
import { IssuesResponse } from "../../utils/types";

function IssueTitle({
  number,
  title,
  user,
  created_at,
  comments,
}: IssuesResponse) {
  return (
    <S.OuterWrapper>
      <S.NumberBadge>#{number}</S.NumberBadge>
      <S.Title>{title}</S.Title>

      <S.InnerWrapper>
        <S.Avatar src={user.avatar_url} />
        <S.NameAndDate>
          <b>{user.login}</b> opened this issue on {created_at.slice(0, 10)}
        </S.NameAndDate>

        <S.Comment>{comments} comments</S.Comment>
      </S.InnerWrapper>

      <S.HR />
    </S.OuterWrapper>
  );
}

export default IssueTitle;
