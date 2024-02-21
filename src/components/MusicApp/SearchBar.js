import styled from "styled-components";

export default function SearchBar({ searchInput, setSearchInput, search }) {
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

const SearchButton = styled.button`
  margin: 25px;
  padding: 5px 20px;
  border: none;
  border-radius: 30px;

  &:hover{
    box-shadow: inset 0px 0px 6px 1px rgba(0,0,0,0.3);
    cursor: pointer;
  }
`