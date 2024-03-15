import styled from "styled-components";

export default function SearchBar({
  setSearchInput,
  searchInput,
  search,
  className,
}) {
  return (
    <SearchContainer className={className}>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <SearchButton onClick={search}>Search</SearchButton>
    </SearchContainer>
  );
}

export { SearchInput, SearchButton };

const SearchInput = styled.input`
  height: 45px;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(40 38 40 / 90%) 80%
  );
  color: #fff;
  width: 400px;
  border-radius: 40px;
  border: none;
  padding: 10px;
  box-shadow: 0px 0px 3px 0px #ffffff80;

  &:focus {
    outline: none;
    box-shadow: 0 0 7px 0 #ff00e570;
  }
`;

const SearchButton = styled.button`
  margin: 25px;
  padding: 5px 20px;
  border: none;
  border-radius: 30px;
  background-color: #ffffff40;

  &:hover {
    box-shadow: 0px 0px 6px 1px #ffffff30;
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  width: fit-content;

  @media screen and (max-width: 590px) {
    display: none;
  }
`;
