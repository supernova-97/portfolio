import styled from "styled-components";

export default function Tracklist({ addToPlaylist, tracks }) {
  const trackList = tracks.tracks;
  console.log(trackList);
  return (
    Array.isArray(trackList) && (
      <>
        <TracksWrapper>
          {trackList.map((track) => (
            <TrackWrapper key={track.uri}>
              <AlbumCover src={track.album.images[0].url} />
              <TrackInfo>
                <TrackName>{track.name}</TrackName>
                <TrackArtist>{track.artists[0].name}</TrackArtist>
              </TrackInfo>
              <AddButton onClick={() => addToPlaylist(track)}>+</AddButton>
            </TrackWrapper>
          ))}
        </TracksWrapper>
      </>
    )
  );
}

const TracksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const TrackWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(40 38 40 / 90%) 80%
  );
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  margin: 10px;
  padding: 20px 5px;
  width: 450px;
  height: 100px;
`;

const TrackInfo = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin: 10px;
`;

const TrackName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 5px 0 10px 0;
  width: 100%;
`;

const TrackArtist = styled.p`
  font-size: 1rem;
`;

const AlbumCover = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 10px;
`;

const AddButton = styled.button`
  position: absolute;
  right: 10px;
  margin: 15px 0 0 0;
  width: 34px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #FF00E5;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px #FF00E5;
  }
`;
