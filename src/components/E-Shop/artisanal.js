import styled from "styled-components";

export default function Artisanal() {
  return (
    <>
      <Main>
        <h1>Artisanal</h1>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw - 5rem;
  margin: 10px 0 10px 0;
  padding: 10px;
`;