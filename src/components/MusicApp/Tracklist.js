import { tracklist } from "./mockdata";

export default function Tracklist({ playlist, addToPlaylist }) {
  return (
    <>
      <h1>Tracklist</h1>
      {tracklist.map((track) => (
        <div key={track.id}>
          <h2>{track.name}</h2>
          <h3>{track.artist}</h3>
          <p>{track.album}</p>
          <button onClick={() => addToPlaylist(track)}>add to playlist</button>
        </div>
      ))}
    </>
  );
}
