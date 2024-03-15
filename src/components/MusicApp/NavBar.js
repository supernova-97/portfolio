import styled from "styled-components";
import SearchBar from "./SearchBar";

export default function NavBar({
  setSearchInput,
  searchInput,
  search,
  logout,
  spotifyToken,
}) {
  return (
    <>
      <Navbar>
        <Header>VibeVault</Header>
        {spotifyToken && (
          <SearchBar
            setSearchInput={setSearchInput}
            searchInput={searchInput}
            search={search}
          />
        )}
        {spotifyToken && <LogOutButton onClick={logout}>Logout</LogOutButton>}
      </Navbar>
    </>
  );
}

const Header = styled.h1`
  color: white;
  margin: 15px;
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

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
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
    justify-content: flex-end;
    flex-direction: row-reverse;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(150, 27, 224, 1) 0%,
      rgba(255, 0, 229, 1) 100%
    );
    border-bottom-right-radius: 80px;
    height: 60px;
    box-shadow: 0 0 20px #ff00e5;

    ${LogOutButton} {
      font-size: 0.7rem;
      font-weight: 600;
    }
  }
`;
