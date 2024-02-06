import styled from "styled-components";

export default function Playlist({
  playlist,
  playlistName,
  removeFromPlaylist,
  toggleEditing,
  isEditing,
  handleNameChange,
  handleNameSubmit,
}) {
  return (
    <PlaylistContainer>
      <h2 onClick={toggleEditing}>
        {isEditing ? (
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              value={playlistName}
              onChange={handleNameChange}
              autoFocus // Focus the input field when editing starts
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          playlistName
        )}
      </h2>
      <ul>
        {playlist.map((track) => (
          <li key={track.id}>
            {track.name}
            <button onClick={() => removeFromPlaylist(track.id)}>Remove</button>
          </li>
        ))}
      </ul>
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
