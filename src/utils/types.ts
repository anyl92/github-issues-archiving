export type getIssuesResponse = {
  number: number;
  title: string;
  user: {login: string;}
  comments: number;
  created_at: string;
}

export type IssueListProps = {
  issueList: getIssuesResponse[] | undefined;
};