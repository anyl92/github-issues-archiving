import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useIssuesContext } from "../../hooks/useIssuesContext";

export default function Header() {
  const { owner, repo, isSelected } = useIssuesContext();
  const [headerOwner, setHeaderOwner] = useState<string>(owner);
  const [headerRepo, setHeaderRepo] = useState<string>(repo);

  useEffect(() => {
    setHeaderOwner(owner);
    setHeaderRepo(repo);
  }, [isSelected]);

  return (
    <HeaderBox>
      <h2>
        {headerOwner} / {headerRepo}
      </h2>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;
