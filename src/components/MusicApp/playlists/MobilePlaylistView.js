import styled from "styled-components";
import Tracklist from "./Tracklist";
import NewPlaylists from "./NewPlaylists";
import UserPlaylists from "./UserPlaylists";
import { MobilePlaylistMenuButton } from "../MobilePlaylistMenuButtons";
import PopUp from "../PopUp";
import SavedPopUp from "../SavedPopUp";

export default function MobilePlaylistView({
  getPlaylists,
  setShowTracklist,
  setShowNewPlaylists,
  setShowAllPlaylists,
  addToPlaylist,
  tracks,
  setSearchInput,
  showNewPlaylists,
  searchInput,
  search,
  playlists,
  removeFromPlaylist,
  handleSaveToSpotifyClick,
  showAllPlaylists,
  userPlaylists,
  setShowPopup,
  handleSubmit,
  showPopup,
  handleInputChange,
  handleSubmitExisting,
  showSavedPopup,
  setSavedShowPopup,
  showTracklist,
}) {
  return (
    <>
      <MainWrapper>
        <ContentContainer>
          <Container>
            <MobilePlaylistMenuButton
              getPlaylists={getPlaylists}
              setShowTracklist={setShowTracklist}
              setShowNewPlaylists={setShowNewPlaylists}
              setShowAllPlaylists={setShowAllPlaylists}
            />
            {showTracklist && (
              <Tracklist
                addToPlaylist={addToPlaylist}
                tracks={tracks}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
                search={search}
              />
            )}
            {!showTracklist && (
              <PlaylistContainer>
                {showNewPlaylists && (
                  <NewPlaylists
                    playlists={playlists}
                    removeFromPlaylist={removeFromPlaylist}
                    handleSaveToSpotifyClick={handleSaveToSpotifyClick}
                  />
                )}
                {showAllPlaylists && userPlaylists && (
                  <UserPlaylists userPlaylists={userPlaylists} />
                )}
              </PlaylistContainer>
            )}
          </Container>
        </ContentContainer>
        <PopUp
          setShowPopup={setShowPopup}
          handleSubmit={handleSubmit}
          showPopup={showPopup}
          playlists={playlists}
          handleInputChange={handleInputChange}
          handleSubmitExisting={handleSubmitExisting}
        />
        <SavedPopUp
          showSavedPopup={showSavedPopup}
          setSavedShowPopup={setSavedShowPopup}
        />
      </MainWrapper>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding-top: 90px;
`;

const PlaylistContainer = styled.div`
  box-shadow: 0px 0px 60px 15px #ff00e580;
  background: linear-gradient(
    180deg,
    rgba(255, 0, 229, 1) 21%,
    rgba(153, 0, 247, 1) 96%
  );
  width: 50%;
  padding: 20px;
  border-bottom-left-radius: 300px;
`;

const MainWrapper = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 590px) {
    display: none;
  }

  ${PlaylistContainer} {
    background-color: #000;
    background: none;
    box-shadow: none;
    width: 100%;
  }

  ${Container} {
    padding: 10px;
    flex-direction: column;
  }

  ${ContentContainer} {
    padding-top: 70px;
  }
`;
