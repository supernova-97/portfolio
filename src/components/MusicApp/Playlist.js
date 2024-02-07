import styled from "styled-components";

export default function Playlist({ playlists }) {
  return (
    <PlaylistContainer>
      {playlists.map((playlist) => (
        <div key={playlist.name}>
          <h2>{playlist.name}</h2>
          {playlist.songs &&
            playlist.songs.map((song) => <p key={song.name}>{song.name}</p>)}
        </div>
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
