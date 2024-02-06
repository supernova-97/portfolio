import styled from "styled-components";
import { useState } from "react";

export default function Playlist({
  playlist,
  playlistName,
  removeFromPlaylist,
  setPlaylistName,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const newName = e.target.elements.playlistName.value;
    setPlaylistName(newName);
    setIsEditing(false);
  };

  const handleNameClick = () => {
    setIsEditing(true);
  };

  return (
    <PlaylistContainer>
      {isEditing ? (
        <form onSubmit={handleNameSubmit}>
          <input
            type="text"
            name="playlistName"
            defaultValue={playlistName}
            autoFocus
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <h2 onDoubleClick={handleNameClick}>{playlistName}</h2>
      )}
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
