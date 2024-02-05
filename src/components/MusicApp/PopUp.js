import { useRef } from "react";

export default function PopUp({ setShowPopup, showPopup, setPlaylistName }) {
  const tempPlaylistNameRef = useRef("");
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    tempPlaylistNameRef.current = e.target.value;
  };

  const handleAddPlaylist = () => {
    if (tempPlaylistNameRef.current.trim() !== "") {
      setPlaylistName(tempPlaylistNameRef.current.trim());
      setShowPopup(false);
    }
  };
  return (
    <>
      {showPopup && (
        <div className="popup">
          <h2>Enter a name for your playlist:</h2>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Playlist name"
          />
          <button onClick={handleAddPlaylist}>Create Playlist</button>
          <button onClick={handlePopupClose}>Cancel</button>
        </div>
      )}
    </>
  );
}
