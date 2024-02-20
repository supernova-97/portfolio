import styled from "styled-components";

export default function Playlist({
  playlists,
  removeFromPlaylist,
  saveToSpotify,
}) {
  return (
    <PlaylistContainer>
      {playlists.map((playlist) => (
        <>
          <div key={playlist.name}>
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
          </div>
          <button onClick={() => saveToSpotify(playlist.id)}>
            Save to Spotify
          </button>
        </>
      ))}
    </PlaylistContainer>
  );
}

const PlaylistContainer = styled.div`
  margin: 30px;
  border-radius: 20px;
  border: 2px solid black;
  width: 20%;
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
`;

const DeleteButton = styled.button`
  border: none;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 3px;
  }
`;
