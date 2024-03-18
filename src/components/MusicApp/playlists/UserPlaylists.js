import styled from "styled-components";

export default function UserPlaylists({ userPlaylists }) {
  if (!userPlaylists) {
    return null;
  }
  const allUserPlaylists = userPlaylists.items || [];

  return (
    <Container>
      {allUserPlaylists.map((playlist) => (
        <PlaylistContainer key={playlist.id}>
          <Img src={playlist.images[0].url} />
          <PlaylistName>{playlist.name}</PlaylistName>
        </PlaylistContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 450px;
  overflow: scroll;
  padding: 10px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px; /* Width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Color of the track */
    border-radius: 10px; /* Rounded corners */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: darkgray; /* Color of the scrollbar handle */
    border-radius: 10px; /* Rounded corners */
  }

  /* Hide the scrollbar corners */
  &::-webkit-scrollbar-corner {
    display: none;
  }

  @media screen and (max-width: 590px) {
    height: 100%;
    padding: 0;
  }
`;

const PlaylistContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 6px #00000030;
  height: 80px;
  width: 40%;

  @media screen and (max-width: 590px) {
    width: 90%;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 229, 1) 0%,
      rgba(150, 27, 224, 0) 100%
    );
  }
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  margin: 10px;
`;

const PlaylistName = styled.p`
  font-weight: 600;
`;
