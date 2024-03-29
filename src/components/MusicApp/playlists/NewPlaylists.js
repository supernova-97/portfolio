import styled from "styled-components";

export default function NewPlaylists({
  playlists,
  removeFromPlaylist,
  handleSaveToSpotifyClick,
}) {
  return (
    <Container>
      {playlists.map((playlist) => (
        <Playlists key={playlist.name}>
          <Header>{playlist.name}</Header>
          {playlist.songs &&
            playlist.songs.map((song) => (
              <SongContainer key={song.name}>
                <SongInfo>
                  <Song>{song.name}</Song>
                  <Artist>{song.artists[0].name}</Artist>
                </SongInfo>
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
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 450px;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 6px; /* Width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Color of the track */
    border-radius: 10px; /* Rounded corners */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: darkgray; /* Color of the scrollbar handle */
    border-radius: 10px; /* Rounded corners */
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }
`;

const Header = styled.h2`
  text-align: center;
`;

const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Song = styled.p`
  margin: 5px 0;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Artist = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const DeleteButton = styled.button`
  border: none;
  height: 20px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0 0 3px 1px #ffffff90;

  &:hover {
    box-shadow: 0 1px 3px #ffffff;
  }
`;

const SaveToSpotifyButton = styled.button`
  margin-top: 20px;
  padding: 5px 15px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  background-color: #19fd00;
  color: #fff;

  &:hover {
    box-shadow: 0 0 15px #ffffff;
  }
`;

const Playlists = styled.div`
  border: 1px solid #ffffff70;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;

  @media screen and (max-width: 590px) {
    border: 2px solid #ff00e560;
    box-shadow: 0 0 15px #ff00e550;
    margin: 20px 0;
    overflow: scroll;

    ${SongContainer} {
      padding-top: 10px;
    }

    ${SongInfo} {
      width: 90%;
    }

    ${Song} {
      font-size: 1rem;
      font-weight: 800;
    }

    ${Artist} {
      font-size: 0.8rem;
    }

    ${SaveToSpotifyButton} {
      font-size: 0.8rem;
      font-weight: 600;
      align-self: center;
    }
  }
`;
