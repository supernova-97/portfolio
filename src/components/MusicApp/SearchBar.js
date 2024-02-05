import styled from "styled-components";

export default function SearchBar() {
  return (
    <>
      <Searchbar>
        <Header>VibeVault</Header>
        <SearchInput type="text" />
      </Searchbar>
    </>
  );
}

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  background-color: purple;
  margin-left: 5rem;
  width: 100vw - 5rem;
  height: 70px;
`;

const Header = styled.h1`
  color: white;
  margin: 15px;
`;

const SearchInput = styled.input`
  height: 35px;
  margin-left: 300px;
  width: 400px;
  border-radius: 40px;
  border: none;
  padding: 10px;

  &:focus {
    outline: 2px solid pink;
  }
`;
