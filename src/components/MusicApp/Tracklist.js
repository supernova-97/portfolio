import { tracklist } from "./mockdata";
import styled from "styled-components";

export default function Tracklist({ addToPlaylist, tracks }) {
  const trackList = tracks.tracks;
  return (
    Array.isArray(trackList) && (
      <>
        <h1>Tracklist</h1>
        <TracksWrapper>
          {trackList.map((track) => (
            <TrackWrapper key={track.uri}>
              <TrackInfo>
                <TrackName>{track.name}</TrackName>
                <AddButton onClick={() => addToPlaylist(track)}>+</AddButton>
              </TrackInfo>
              <TrackArtist>{track.artists[0].name}</TrackArtist>
            </TrackWrapper>
          ))}
        </TracksWrapper>
      </>
    )
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
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  margin: 10px;
  padding: 20px 5px;
  min-width: 280px;
  width: 250px;
  height: 140px;
  max-height: 140px;
`;

const TrackInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrackName = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 5px 0 10px 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackArtist = styled.p`
  font-size: 1.1rem;
`;

const AddButton = styled.button`
  margin: 15px 0 0 0;
  width: 34px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: limegreen;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: purple;
  }
`;
