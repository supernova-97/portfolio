import styled from "styled-components";

export default function PopUp({
  setShowPopup,
  showPopup,
  handleSubmit,
  playlists,
  handleInputChange,
  handleSubmitExisting,
}) {
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <PopUpWrapper>
          <Header>Create new playlist:</Header>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              onChange={handleInputChange}
              placeholder="Playlist name"
            />
            <Button type="submit">Create Playlist</Button>
            <CancelButton onClick={handlePopupClose}>Cancel</CancelButton>
          </Form>
          {playlists.length === 0 ? (
            <h2>No playlists</h2>
          ) : (
            playlists.map((playlist, index) => (
              <ListItem key={playlist.id}>
                <PlaylistButton
                  onClick={() => handleSubmitExisting(playlist.id)}
                >
                  {playlist.name}
                </PlaylistButton>
              </ListItem>
            ))
          )}
        </PopUpWrapper>
      )}
    </>
  );
}

const PopUpWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  /* backdrop-filter: blur(5px); */
  box-shadow: 0px 5px 20px 4px #6b6a6a54;
`;

const Header = styled.h1`
  margin-bottom: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 40px;
  margin: 10px;
`;

const Button = styled.button`
  margin: 5px;
  font-size: 1.1rem;
  padding: 5px 20px;
  border-radius: 10px;
  border: none;
  background-color: limegreen;
`;

const CancelButton = styled.button`
 margin: 5px;
  font-size: .8rem;
  padding: 5px 20px;
  border-radius: 10px;
  border: none;
  background-color: limegreen;
`

const ListItem = styled.li`
  list-style-type: none;
`;

const PlaylistButton = styled.button`
  font-size: 1.2rem;
  margin-top: 20px;
  padding: 5px 40px;
  border: none;
  background-color: #80008060;
  border-radius: 30px;
  color: #fff;

  &:hover {
   box-shadow: 0 0 8px 0 #fffffffc;
  }
`;
