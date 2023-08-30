import { useFormContext } from "../pages/MainPage";

const Select = () => {
  const { getIssuesApiCall, owner, setOwner, repo, setRepo } = useFormContext();

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
