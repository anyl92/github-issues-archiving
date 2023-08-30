type SelectProps = {
  owner: string;
  setOwner: any;
  repo: string;
  setRepo: any;
  getIssuesApiCall: any;
};

const Select = ({
  owner,
  setOwner,
  repo,
  setRepo,
  getIssuesApiCall,
}: SelectProps) => {
  return (
    <form>
      <div>
        <span>owner: </span>
        <input
          type="text"
          onChange={(e) => setOwner(e.target.value)}
          value={owner}
        />
      </div>
      <div>
        <span>repo: </span>
        <input
          type="text"
          onChange={(e) => setRepo(e.target.value)}
          value={repo}
        />
      </div>
      <button type="button" onClick={getIssuesApiCall}>
        조회
      </button>
    </form>
  );
};

export default Select;
