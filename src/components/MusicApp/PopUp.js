import styled from "styled-components";

export default function PopUp({
  setShowPopup,
  showPopup,
  handleSubmit,
  playlists,
  handleInputChange,
  handleSubmitExisting,
}) {

  function handlePopupClose(){
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
          <Divider></Divider>
          {playlists.length === 0 ? (
            <h2>No playlists</h2>
          ) : (
            playlists.map((playlist) => (
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
  width: 45%;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
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
  margin: 15px 0 5px 0;
  font-size: 1.1rem;
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
  background-color: limegreen;
  cursor: pointer;

  &:hover {
   box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  }
`;

const CancelButton = styled.button`
 margin: 5px;
  font-size: .8rem;
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
  background-color: limegreen;
  cursor: pointer;

  &:hover {
   box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  }
`

const Divider = styled.div`
  width: 40%;
  height: 1px;
  background-color: #00000040;
  border-radius: 30px;
  margin-top: 15px;
`

const ListItem = styled.li`
  list-style-type: none;
`;

const PlaylistButton = styled.button`
  font-size: 1.2rem;
  margin-top: 20px;
  padding: 5px 40px;
  border: 1px solid #00000040;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
   box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  }
`;
