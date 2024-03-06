import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import styled from "styled-components";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import PopUp from "./PopUp";
import SavedPopUp from "./SavedPopUp";

export default function MusicApp() {
  const [searchInput, setSearchInput] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showSavedPopup, setSavedShowPopup] = useState(false);
  const [clickedTrack, setClickedTrack] = useState(null);

  //Spotify
  const CLIENT_ID = "e0987519cb3145189af43a7c08efab24";
  const REDIRECT_URI = "http://localhost:3000/music";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES = [
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-private",
    "playlist-read-collaborative",
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
      spotify
        .getMe()
        .then((user) => {})
        .catch((error) => {
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
    window.localStorage.removeItem("spotifyToken");
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

  const searchParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${spotifyToken}`,
    },
  };

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
    saveToSpotify(playlistId, playlistName, songs).then(() => {
      const updatedPlaylists = playlists.filter(
        (playlist) => playlist.id !== playlistId
      );
      setPlaylists(updatedPlaylists);
      setSavedShowPopup(true);
    });
  }

  async function search() {
    //get search items
    let returnedTracks = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        searchInput +
        "&type=track&limit=50",
      searchParams
    ).then((response) => response.json());
    setSearchInput("");
    setTracks(returnedTracks);
  }

  let allPlaylists = [];

  async function getPlaylists() {
    const response = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    const data = await response.json();
    const userId = data.id;

    let returnedPlaylists = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists?limit=50`,
      searchParams
    ).then((response) => response.json());
    setUserPlaylists(returnedPlaylists);
  }

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        search={search}
        logout={logout}
        spotifyToken={spotifyToken}
      />
      <Main>
        {!spotifyToken ? (
          <MainWrapper>
            <Intro>
              <h1>Welcome to VibeVault!</h1>
              <h2>The place where awesome playlists are born</h2>
              <p>
                Use this app to look up songs and create playlists. With the
                click of a button you can save your playlist to your Spotify
                Account.
              </p>
              <LogInButton href={loginUrl}>Login to Spotify</LogInButton>
            </Intro>
          </MainWrapper>
        ) : (
          <MainWrapper>
            <ContentContainer>
              <Container>
                <Tracklist addToPlaylist={addToPlaylist} tracks={tracks} />
                <PlaylistContainer>
                  <Playlist
                    playlists={playlists}
                    removeFromPlaylist={removeFromPlaylist}
                    playlistName={playlistName}
                    handleSaveToSpotifyClick={handleSaveToSpotifyClick}
                    getPlaylists={getPlaylists}
                    userPlaylists={userPlaylists}
                  />
                </PlaylistContainer>
              </Container>
            </ContentContainer>
            <PopUp
              setShowPopup={setShowPopup}
              handleSubmit={handleSubmit}
              showPopup={showPopup}
              playlists={playlists}
              handleInputChange={handleInputChange}
              handleSubmitExisting={handleSubmitExisting}
            />
            <SavedPopUp
              showSavedPopup={showSavedPopup}
              setSavedShowPopup={setSavedShowPopup}
            />
          </MainWrapper>
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  background-color: #000;
  height: 100vh;
  margin-left: -1rem;
`;

const MainWrapper = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Intro = styled.div`
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding-top: 90px;
`;

const PlaylistContainer = styled.div`
  height: 700px;
  box-shadow: 0px 0px 60px 15px #ff00e580;
  background: linear-gradient(
    180deg,
    rgba(255, 0, 229, 1) 21%,
    rgba(153, 0, 247, 1) 96%
  );
  width: 50%;
  padding: 20px;
  border-bottom-left-radius: 300px;
`;

const LogInButton = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-top: 100px;
  text-decoration: none;
  background-color: #19fd00;
  border-radius: 40px;
  padding: 10px 35px;

  &:hover {
    color: #fff;
    box-shadow: 0 0 16px #00000060;
  }
`;
