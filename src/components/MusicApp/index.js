import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import styled from "styled-components";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import PopUp from "./PopUp";

export default function MusicApp() {
  const [searchInput, setSearchInput] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedTrack, setClickedTrack] = useState(null);

  //Spotify
  const CLIENT_ID = "e0987519cb3145189af43a7c08efab24";
  const CLIENT_SECRET = "a655e9144e01477f876f005421285e20";
  const REDIRECT_URI = "http://localhost:3000/music";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES = [
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-modify-private",
  ];

  //authorization code
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
    "%20"
  )}&response_type=${RESPONSE_TYPE}&show_dialog=true`;

  const spotify = new SpotifyWebApi();
  const [spotifyToken, setSpotifyToken] = useState("");

  const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});
  };

  useEffect(() => {
    // Retrieve token from URL hash fragment
    const _spotifyToken = getTokenFromUrl().access_token;
    window.location.hash = "";
  
    if (_spotifyToken) {
      // Save token to localStorage
      localStorage.setItem("spotifyToken", _spotifyToken);
      // Set token in component state
      setSpotifyToken(_spotifyToken);
      // Initialize Spotify Web API instance with the token
      spotify.setAccessToken(_spotifyToken);
      // Optionally, fetch user data or perform other actions
      spotify.getMe().then((user) => {
        console.log("User data:", user);
      }).catch((error) => {
        console.error("Error fetching user data:", error);
      });
    } else {
      // If token is not present in URL, check if it's stored in localStorage
      const storedToken = localStorage.getItem("spotifyToken");
      if (storedToken) {
        // Set token from localStorage to component state
        setSpotifyToken(storedToken);
        // Initialize Spotify Web API instance with the token
        spotify.setAccessToken(storedToken);
      }
    }
  }, [spotify]);

  const logout = () => {
    setSpotifyToken("");
    window.localStorage.removeItem("token");
  };

  //playlist logic
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

  async function saveToSpotify(playlistId, playlistName, songs) {
    const response = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    const data = await response.json();
    const userId = data.id;

    const createPlaylistResponse = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: playlistName,
          description: "Playlist created from your app",
          public: false,
        }),
      }
    );
    const createdPlaylistData = await createPlaylistResponse.json();
    const createdPlaylistId = createdPlaylistData.id;

    // Add tracks to the playlist
    const uris = songs.map((song) => song.uri);

    await fetch(
      `https://api.spotify.com/v1/playlists/${createdPlaylistId}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uris: uris }),
      }
    );
  }

  function handleSaveToSpotifyClick(playlistId, playlistName, songs) {
    saveToSpotify(playlistId, playlistName, songs).then((createdPlaylistId) => {
      // After saving to Spotify, filter out the playlist from playlists
      const updatedPlaylists = playlists.filter(
        (playlist) => playlist.id !== playlistId
      );
      setPlaylists(updatedPlaylists);
    });
  }

  async function search() {
    //get request using search to get the artist id
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${spotifyToken}`,
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

    //get top tracks based on search input
    let returnedTracks = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistId +
        "/top-tracks" +
        "?market=US",
      searchParams
    ).then((response) => response.json());
    setTracks(returnedTracks);
  }

  return (
    <Background>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        search={search}
      />
      <main>
        {!spotifyToken ? (
          <Main>
            <h1>Welcome to VibeVault!</h1>
            <h2>The place where awesome playlists are born</h2>
            <p>
              Use this app to look up songs and create playlists. With the click
              of a button you can save your playlist to your Spotify Account.
            </p>
            <LogInButton href={loginUrl}>Login to Spotify</LogInButton>
          </Main>
        ) : (
          <>
            <Test>
              <Tracklist addToPlaylist={addToPlaylist} tracks={tracks} />

              {playlists.length > 0 && (
                <Playlist
                  playlists={playlists}
                  removeFromPlaylist={removeFromPlaylist}
                  playlistName={playlistName}
                  handleSaveToSpotifyClick={handleSaveToSpotifyClick}
                />
              )}
            </Test>
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
    </Background>
  );
}

const Main = styled.main`
  background-color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Background = styled.div`
background-color: #000;
color: #fff;
`

const Test = styled.div`
display: flex;
justify-content: space-between;
`
const LogInButton = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-top: 100px;
  text-decoration: none;
  background-color: limegreen;
  border-radius: 40px;
  padding: 10px 35px;

  &:hover {
    color: #fff;
    box-shadow: 0 0 16px #00000060;
  }
`;

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
