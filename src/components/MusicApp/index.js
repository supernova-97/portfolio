import { useEffect, useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import PopUp from "./PopUp";

export default function MusicApp() {
  const [token, setToken] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedTrack, setClickedTrack] = useState(null);

  let playlistName = "";

  function addToPlaylist(track) {
    setClickedTrack(track);
    setShowPopup(true);
  }

  function removeFromPlaylist(playlistId, trackId) {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) => {
        if (playlist.id === playlistId) {
          const updatedSongs = playlist.songs.filter(
            (song) => song.id !== trackId
          );
          return { ...playlist, songs: updatedSongs };
        }
        return playlist;
      })
    );
  }

  function handleInputChange(e) {
    playlistName = e.target.value;
  }

  function generateId() {
    let id = Math.floor(Math.random() * 99999);
    return id;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (playlistName !== "") {
      const newPlaylist = {
        name: playlistName,
        id: generateId(),
        songs: [clickedTrack],
      };
      setPlaylists((prev) => [newPlaylist, ...prev]);
      setShowPopup(false);
    } else {
      alert("Playlist name can not be empty.");
    }
  }

  function handleSubmitExisting(playlistId) {
    if (playlistId && clickedTrack) {
      const chosenPlaylist = playlists.find(
        (playlist) => playlist.id === playlistId
      );
      if (chosenPlaylist) {
        const isTrackInPlaylist = chosenPlaylist.songs.some(
          (song) => song.id === clickedTrack.id
        );
        if (isTrackInPlaylist) {
          alert("Song is already in the playlist.");
        } else {
          const updatedPlaylist = {
            ...chosenPlaylist,
            songs: [...chosenPlaylist.songs, clickedTrack],
          };
          setPlaylists((prevPlaylists) =>
            prevPlaylists.map((playlist) =>
              playlist.id === playlistId ? updatedPlaylist : playlist
            )
          );
          setShowPopup(false);
        }
      }
    }
  }

  function saveToSpotify(playlistId) {
    console.log("Playlist saved to Spotify");
    setPlaylists((prevPlaylists) =>
      prevPlaylists.filter((playlist) => playlist.id !== playlistId)
    );
  }

  //Spotify
  const CLIENT_ID = "e0987519cb3145189af43a7c08efab24";
  const CLIENT_SECRET = "a655e9144e01477f876f005421285e20";
  const REDIRECT_URI = "http://localhost:3000/music";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  //access token
  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setToken(data.access_token));
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  async function search() {
    console.log("search for", searchInput);

    //get request using search to get the artist id
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    let artistId = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log("ID: ", artistId);

    //get albums from artist with artist id
    let albums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistId +
        "/albums" +
        "?include_groups=album&limit=50",
      searchParams
    )
      .then((response) => response.json())
      .then((data) => console.log("album data", data));

    let returnedTracks = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistId +
        "/top-tracks" +
        "?market=US",
      searchParams
    )
      .then((response) => response.json())
      setTracks(returnedTracks);
  }
console.log(tracks)
  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        search={search}
      />
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
            <Tracklist addToPlaylist={addToPlaylist} tracks={tracks}/>

            {playlists.length > 0 && (
              <Playlist
                playlists={playlists}
                removeFromPlaylist={removeFromPlaylist}
                playlistName={playlistName}
                saveToSpotify={saveToSpotify}
              />
            )}

            <PopUp
              setShowPopup={setShowPopup}
              handleSubmit={handleSubmit}
              showPopup={showPopup}
              playlists={playlists}
              handleInputChange={handleInputChange}
              handleSubmitExisting={handleSubmitExisting}
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
