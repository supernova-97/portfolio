import { useEffect, useState } from "react";
import styled from "styled-components";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import PopUp from "./PopUp";

export default function MusicApp() {
  const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  let playlistName = "";

  const addToPlaylist = (track) => {
    setShowPopup(true);
  };

  console.log("playlists", playlists);

  // const removeFromPlaylist = (id) => {
  //   setPlaylists((prevPlaylist) =>
  //     prevPlaylist.filter((song) => song.id !== id)
  //   );
  // };

  const handleInputChange = (e) => {
    playlistName = e.target.value;
  };

  const generateId = () => {
    let id = Math.floor(Math.random() * 99999);
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playlistName !== "") {
      setPlaylists((prev) => [
        { name: playlistName, id: generateId() },
        ...prev,
      ]);
      setShowPopup(false);
    } else {
      alert("Playlist name can not be empty.");
    }
  };

  const CLIENT_ID = "e0987519cb3145189af43a7c08efab24";
  const REDIRECT_URI = "http://localhost:3000/music";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <SearchBar />
      <main>
        <h1>VibeVault</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to VibeVault (Spotify)
          </a>
        ) : (
          <>
            <Tracklist addToPlaylist={addToPlaylist} />
            {playlists.length > 0 && (
              <Playlist
                playlists={playlists}
                // removeFromPlaylist={removeFromPlaylist}
                playlistName={playlistName}
              />
            )}

            <PopUp
              setShowPopup={setShowPopup}
              handleSubmit={handleSubmit}
              showPopup={showPopup}
              playlistName={playlistName}
              playlists={playlists}
              handleInputChange={handleInputChange}
            />

            <LogOutButton onClick={logout}>Logout</LogOutButton>
          </>
        )}
      </main>
    </>
  );
}

const LogOutButton = styled.button`
  padding: 10px;
  background-color: purple;
  font-size: 1.2rem;
  color: #fff;
  border-radius: 40px;
  border: none;
  margin: 10px;
  padding: 5px 15px;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;
