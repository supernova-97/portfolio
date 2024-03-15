import styled from "styled-components";
import { PlaylistMenuButton } from "../PlaylistMenuButtons";
import UserPlaylists from "./UserPlaylists";
import NewPlaylists from "./NewPlaylists";

export default function Playlist({
  playlists,
  removeFromPlaylist,
  handleSaveToSpotifyClick,
  getPlaylists,
  userPlaylists,
  setShowTracklist,
  setShowNewPlaylists,
  setShowAllPlaylists,
  showTracklist,
  showNewPlaylists,
  showAllPlaylists,
}) {
  const allUserPlaylists = userPlaylists.items;
  return (
    <Container>
      <PlaylistMenuButton
        getPlaylists={getPlaylists}
        setShowTracklist={setShowTracklist}
        setShowNewPlaylists={setShowNewPlaylists}
        setShowAllPlaylists={setShowAllPlaylists}
      />

      {showNewPlaylists ? (
        playlists && playlists.length > 0 ? (
          <NewPlaylists
            playlists={playlists}
            removeFromPlaylist={removeFromPlaylist}
            handleSaveToSpotifyClick={handleSaveToSpotifyClick}
          />
        ) : (
          <AltTextPlaylist>
            Create some playlists and save them to Spotify!
          </AltTextPlaylist>
        )
      ) : null}

      {showAllPlaylists && allUserPlaylists ? (
        <UserPlaylists allUserPlaylists={allUserPlaylists} />
      ) : null}
    </Container>
  );
}

const AltTextPlaylist = styled.p`
  margin-top: 20%;
  text-align: center;
  font-size: 1.2rem;
`;

const Container = styled.div`
  height: 70%;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px; /* Width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Color of the track */
    border-radius: 10px; /* Rounded corners */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: white; /* Color of the scrollbar handle */
    border-radius: 10px; /* Rounded corners */
  }

  @media screen and (max-width: 590px) {
  }
`;
