import styled from "styled-components";
import { useState } from "react";

export default function Playlist({
  playlists,
  removeFromPlaylist,
  handleSaveToSpotifyClick,
  getPlaylists,
  userPlaylists,
}) {
  const [togglePlaylists, setTogglePlaylists] = useState(true);

  const allUserPlaylists = userPlaylists.items;
  console.log("userPlaylists", userPlaylists);

  function showNewPlaylists() {
    setTogglePlaylists(true);
  }

  function showAllPlaylists() {
    setTogglePlaylists(false);
  }

  return (
    <Container>
      <PlaylistsButton onClick={() => showNewPlaylists()}>
        new Playlists
      </PlaylistsButton>
      <PlaylistsButton
        onClick={() => {
          showAllPlaylists();
          getPlaylists();
        }}
      >
        all Playlists
      </PlaylistsButton>
      {togglePlaylists ? (
        playlists && playlists.length > 0 ? (
          playlists.map((playlist) => (
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
          ))
        ) : (
          <AltTextPlaylist>
            Create some playlists and save them to Spotify!
          </AltTextPlaylist>
        )
      ) : (
        allUserPlaylists &&
        allUserPlaylists.map((playlist) => (
          <PlaylistContainer key={playlist.id}>
            <Img src={playlist.images[0].url} />
            <PlaylistName>{playlist.name}</PlaylistName>
          </PlaylistContainer>
        ))
      )}
    </Container>
  );
}

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
  border: 1px solid #ffffff70;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
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

const AltTextPlaylist = styled.p`
  margin-top: 20%;
  text-align: center;
  font-size: 1.2rem;
`;

//playlists

const PlaylistsButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  padding: 5px 15px;
  margin-left: 15px;
  border: 2px solid #FF61EF;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 23%,
      rgba(140, 217, 255, 0) 100%
    );
  }
`;

const PlaylistContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 6px #00000030;
  height: 80px;
  width: 40%;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  margin: 10px;
`;

const PlaylistName = styled.p`
  font-weight: 600;
`;
