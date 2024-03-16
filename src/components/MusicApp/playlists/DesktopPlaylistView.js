import styled from "styled-components";
import Tracklist from "./Tracklist";
import NewPlaylists from "./NewPlaylists";
import UserPlaylists from "./UserPlaylists";
import { DesktopPlaylistMenuButton } from "../DesktopPlaylistMenuButton";
import PopUp from "../PopUp";
import SavedPopUp from "../SavedPopUp";

export default function DesktopPlaylistView({
  getPlaylists,
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
}) {
  return (
    <>
      <MainWrapper>
        <ContentContainer>
          <Container>
            <Tracklist
              addToPlaylist={addToPlaylist}
              tracks={tracks}
              setSearchInput={setSearchInput}
              searchInput={searchInput}
              search={search}
            />

            <PlaylistContainer>
              <DesktopPlaylistMenuButton
                getPlaylists={getPlaylists}
                setShowNewPlaylists={setShowNewPlaylists}
                setShowAllPlaylists={setShowAllPlaylists}
              />
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

const MainWrapper = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

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
  height: 700px;
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
