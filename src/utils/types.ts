export interface IssuesResponse {
  number: number;
  title: string;
  user: {login: string;}
  comments: number;
  created_at: string;
}

export interface IssueListProps {
  issueList: IssuesResponse[] | undefined;
};

export interface IssuesContextType {
  getIssuesApiCall: () => Promise<void>;
  owner: string;
  setOwner: React.Dispatch<React.SetStateAction<string>>;
  repo: string;
  setRepo: React.Dispatch<React.SetStateAction<string>>;
  issueList: IssuesResponse[] | undefined;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isAdvView: (idx: number) => boolean;
  handleAdvClick: () => void;
}