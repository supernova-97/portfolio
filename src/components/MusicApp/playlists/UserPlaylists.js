import styled from "styled-components";

export default function UserPlaylists({ allUserPlaylists }) {
  
  return (
    <>
      {allUserPlaylists.map((playlist) => (
        <PlaylistContainer key={playlist.id}>
          <Img src={playlist.images[0].url} />
          <PlaylistName>{playlist.name}</PlaylistName>
        </PlaylistContainer>
      ))}
    </>
  );
}

const PlaylistContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 6px #00000030;
  height: 80px;
  width: 40%;
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
