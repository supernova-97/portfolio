import styled from "styled-components";

export default function Playlist({
  playlists,
  removeFromPlaylist,
  handleSaveToSpotifyClick,
}) {
  return (
    <PlaylistContainer>
      <Container>
        <h1>Your Playlists</h1>
        {playlists.map((playlist) => (
          <>
            <Playlists key={playlist.name}>
              <Header>{playlist.name}</Header>
              {playlist.songs &&
                playlist.songs.map((song) => (
                  <SongContainer>
                    <Song key={song.name}>{song.name}</Song>
                    <DeleteButton
                      onClick={() => removeFromPlaylist(playlist.id, song.id)}
                    >
                      x
                    </DeleteButton>
                  </SongContainer>
                ))}
              <SaveToSpotifyButton
                onClick={() =>
                  handleSaveToSpotifyClick(
                    playlist.id,
                    playlist.name,
                    playlist.songs
                  )
                }
              >
                Save to Spotify
              </SaveToSpotifyButton>
            </Playlists>
          </>
        ))}
      </Container>
    </PlaylistContainer>
  );
}

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
`;

const Playlists = styled.div`
  border: 1px solid #ffffff30;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
`;

const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Song = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const DeleteButton = styled.button`
  border: none;
  height: 20px;
  border-radius: 5px;
  color: #ff00e5;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0 0 2px #ff00e5;

  &:hover {
    box-shadow: 0 1px 3px #ff00e5;
  }
`;

const SaveToSpotifyButton = styled.button`
  margin-top: 20px;
  padding: 5px 15px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background-color: #19fd00;

  &:hover {
    box-shadow: 0 0 15px #19fd00;
  }
`;
