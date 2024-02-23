import styled from "styled-components";

export default function SearchBar({ setSearchInput, search, logout }) {
  return (
    <>
      <Searchbar>
        <Header>VibeVault</Header>
        <SearchInput
          type="text"
          placeholder="Search..."
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              search();
            }
          }}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchButton onClick={search}>Search</SearchButton>
        <LogOutButton onClick={logout}>Logout</LogOutButton>
      </Searchbar>
    </>
  );
}

const Searchbar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  background-color: purple;
  margin-left: 5rem;
  height: 70px;
  z-index: 1;
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

const SearchButton = styled.button`
  margin: 25px;
  padding: 5px 20px;
  border: none;
  border-radius: 30px;

  &:hover {
    box-shadow: inset 0px 0px 6px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;
const LogOutButton = styled.button`
  padding: 10px;
  background-color: purple;
  font-size: 1.2rem;
  color: #fff;
  border-radius: 40px;
  border: none;
  margin: 10px;
  padding: 5px 15px;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;
