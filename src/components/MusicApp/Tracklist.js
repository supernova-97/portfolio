import { tracklist } from "./mockdata";
import styled from "styled-components";

export default function Tracklist({ addToPlaylist }) {
  return (
    <>
      <h1>Tracklist</h1>
      <TracksWrapper>
        {tracklist.map((track) => (
          <TrackWrapper key={track.id}>
            <TrackName>{track.name}</TrackName>
            <h3>{track.artist}</h3>
            <AddButton onClick={() => addToPlaylist(track)}>
              add to playlist
            </AddButton>
          </TrackWrapper>
        ))}
      </TracksWrapper>
    </>
  );
}

const TracksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  margin: 10px;
  padding: 20px 0;
  min-width: 250px;
  width: 250px;
`;

const TrackName = styled.h1`
  margin: 5px 0 10px 0;
  width: 100%;
  text-align: center;
`;

const AddButton = styled.button`
  margin: 15px 0 0 0;
  padding: 5px 15px;
  border-radius: 20px;
  border: 1px solid #00000050;
  background-color: limegreen;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: purple;
  }
`;
