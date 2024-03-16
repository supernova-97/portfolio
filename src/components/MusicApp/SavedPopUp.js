import styled from "styled-components";

export default function SavedPopUp({ showSavedPopup, setSavedShowPopup }) {
  function handleOkayButtonClick() {
    setSavedShowPopup(false);
  }

  return (
    showSavedPopup && (
      <Container>
        <PopUpText>Playlist successfully saved to Spotify!</PopUpText>
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

  @media screen and (max-width: 590px) {
    padding: 15px;
    width: 90%;
    box-shadow: 0px 0px 20px 2px #ffffff30;
    text-align: center;
  }
`;

const PopUpText = styled.h2`
  @media screen and (max-width: 590px) {
    font-size: 1.2rem;
    margin-top: 10px;
  }
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

  @media screen and (max-width: 590px) {
    font-size: 1rem;
  }
`;
