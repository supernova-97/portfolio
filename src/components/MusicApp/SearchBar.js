import styled from "styled-components";

export default function SearchBar({
  setSearchInput,
  searchInput,
  search,
  logout,
  spotifyToken,
}) {
  return (
    <>
      <Searchbar>
        <Header>VibeVault</Header>
        {spotifyToken && (
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchInput}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  search();
                }
              }}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <SearchButton onClick={search}>Search</SearchButton>
          </SearchContainer>
        )}
        {spotifyToken && <LogOutButton onClick={logout}>Logout</LogOutButton>}
      </Searchbar>
    </>
  );
}

const SearchContainer = styled.div`
  width: fit-content;
`;

const Header = styled.h1`
  color: white;
  margin: 15px;
`;

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
const LogOutButton = styled.button`
  padding: 10px;
  background-color: #19fd00;
  font-size: 1.2rem;
  color: #fff;
  border-radius: 40px;
  border: none;
  margin: 10px;
  padding: 5px 15px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px 1px #ffffff50;
  }
`;

const Searchbar = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 95%;
  align-items: center;
  background-color: transparent;
  margin-left: 5rem;
  height: 90px;
  z-index: 1;

  @media screen and (max-width: 590px) {
    margin: 0;
    text-align: center;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(150, 27, 224, 1) 0%,
      rgba(255, 0, 229, 1) 100%
    );
    border-bottom-right-radius: 80px;
    height: 60px;
    box-shadow: 0 0 20px #ff00e5;

    ${SearchContainer} {
      position: absolute;
      top: 120px;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
    }

    ${SearchButton} {
      margin-left: auto;
      margin-right: 10px;
      padding: 5px 15px;
      margin: 0;
    }

    ${SearchInput} {
      width: 240px;
      height: 30px;
      margin-right: 10px; /* Add margin between input and button */
    }

    ${LogOutButton} {
      position: absolute;
      left: 5px;
      padding: 5px 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;
