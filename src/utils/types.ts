export interface IssuesResponse {
  number: number;
  title: string;
  user: {login: string;}
  comments: number;
  created_at: string;
  pull_request: object
}

export interface IssueListProps {
  issueList: IssuesResponse[] | undefined;
};

export interface IssuesContextType {
  owner: string;
  setOwner: React.Dispatch<React.SetStateAction<string>>;
  repo: string;
  setRepo: React.Dispatch<React.SetStateAction<string>>;
  issueList: IssuesResponse[];
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getIssuesApiCall: (mode: string) => Promise<void>;
  isAdvView: (idx: number) => boolean;
  handleAdvClick: () => void;
  isPageEnd: boolean;
}