import { useEffect, useState } from "react";
import styled from "styled-components";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import PopUp from "./PopUp";

export default function MusicApp() {
  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [showPopup, setShowPopup] = useState(false);

  const addToPlaylist = (track) => {
    const isTrackInPlaylist = playlist.some(
      (playlistTrack) => playlistTrack.id === track.id
    );

    if (!isTrackInPlaylist) {
      setPlaylist((prev) => [...prev, track]);

      if (!playlistName) {
        setShowPopup(true);
      }
    } else {
      alert("Track is already in the playlist");
    }
  };

  const removeFromPlaylist = (id) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((song) => song.id !== id)
    );
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
            <Tracklist playlist={playlist} addToPlaylist={addToPlaylist} />

            {playlistName && playlist.length > 0 && (
              <Playlist
                playlist={playlist}
                playlistName={playlistName}
                setPlaylistName={setPlaylistName}
                removeFromPlaylist={removeFromPlaylist}
              />
            )}

            <PopUp
              setShowPopup={setShowPopup}
              setPlaylistName={setPlaylistName}
              showPopup={showPopup}
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
