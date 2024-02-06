import styled from "styled-components";

export default function Playlist({
  playlist,
  playlistName,
  removeFromPlaylist,
}) {
  return (
    <PlaylistContainer>
      <h2>{playlistName}</h2>
      {playlist.map((track) => (
        <>
          <p key={track.id}>{track.name}</p>
          <button onClick={() => removeFromPlaylist(track.id)}>remove</button>
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
