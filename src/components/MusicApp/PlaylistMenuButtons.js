import styled from "styled-components";

export function PlaylistMenuButton({
  getPlaylists,
  setShowTracklist,
  setShowNewPlaylists,
  setShowAllPlaylists,
}) {
  return (
    <>
      <TracklistButton
        onClick={() => {
          setShowTracklist(true);
          setShowNewPlaylists(false);
          setShowAllPlaylists(false);
        }}
      >
        Tracklist
      </TracklistButton>

      <PlaylistsButton
        onClick={() => {
          setShowTracklist(false);
          setShowNewPlaylists(true);
          setShowAllPlaylists(false);
        }}
      >
        New Playlists
      </PlaylistsButton>

      <PlaylistsButton
        onClick={() => {
          setShowTracklist(false);
          setShowNewPlaylists(false);
          setShowAllPlaylists(true);
          getPlaylists();
        }}
      >
        All Playlists
      </PlaylistsButton>
    </>
  );
}

const PlaylistsButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  padding: 5px 15px;
  margin-left: 15px;
  border: 2px solid #ff61ef;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 23%,
      rgba(140, 217, 255, 0) 100%
    );
  }
`;

const TracklistButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  padding: 5px 15px;
  margin-left: 15px;
  border: 2px solid #ff61ef;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 23%,
      rgba(140, 217, 255, 0) 100%
    );
  }

  @media screen and (min-width: 590px) {
    display: none;
  }
`;
