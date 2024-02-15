import styled from "styled-components";

export default function PopUp({
  setShowPopup,
  showPopup,
  handleSubmit,
  playlists,
  handleInputChange,
  handleSubmitExisting
}) {
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <PopUpWrapper>
          <h2>Create new playlist:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Playlist name"
            />
            <button type="submit">Create Playlist</button>
            <button onClick={handlePopupClose}>Cancel</button>
          </form>
          {playlists.length === 0 ? (
            <h2>No playlists</h2>
          ) : (
            playlists.map((playlist, index) => (
              <li key={playlist.id}>
                  <button onClick={() => handleSubmitExisting(playlist.id)}>
                    {playlist.name}
                  </button>
                </li>
            ))
          )}
        </PopUpWrapper>
      )}
    </>
  );
}

const PopUpWrapper = styled.div`
  border: 2px solid red;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
