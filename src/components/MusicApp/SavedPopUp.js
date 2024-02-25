import styled from "styled-components";

export default function SavedPopUp({
  showSavedPopup,
  setSavedShowPopup,
  handleOkayButtonClick,
}) {
  function handleOkayButtonClick() {
    setSavedShowPopup(false);
  }

  return (
    showSavedPopup && (
      <Container>
        <h2>Playlist successfully saved to Spotify!</h2>
        <OkayButton
          onClick={() => {
            handleOkayButtonClick();
          }}
        >
          Okay
        </OkayButton>
      </Container>
    )
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
  background-color: #00000090;
  backdrop-filter: blur(5px);
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OkayButton = styled.button`
  margin: 30px;
  padding: 5px 15px;
  background-color: #ff00e5;
  color: #fff;
  border: none;
  border-radius: 40px;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px #ff00e5;
  }
`;
