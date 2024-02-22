import styled from "styled-components";

export default function Playlist({
  playlists,
  removeFromPlaylist,
  handleSaveToSpotifyClick,
}) {
  return (
    <PlaylistContainer>
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
          <SaveToSpotifyButton onClick={() => handleSaveToSpotifyClick(playlist.id, playlist.name, playlist.songs)}>
            Save to Spotify
          </SaveToSpotifyButton>
          </Playlists>
        </>
      ))}
    </PlaylistContainer>
  );
}

const PlaylistContainer = styled.div`
  margin: 30px;
  border-radius: 20px;
  border: 2px solid #FF00E5;
  box-shadow: 0px 0px 20px #FF00E580;
  width: 40%;
  padding: 20px;
`;

const Playlists = styled.div`
  border: 1px solid #ffffff30;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
`

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
  color: #FF00E5;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0 0 2px #FF00E5;

  &:hover {
    box-shadow: 0 1px 3px #FF00E5;
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

 &:hover{
  box-shadow: 0 0 15px #19fd00;
 }
`
