import { useParams } from 'react-router-dom';
import songsData from "../data/songs.json";

function SongInfo() {
  const { songRank } = useParams();
  const song = songsData.songs.find(song => song.rank === parseInt(songRank));

  if (!song) {
    return <div>Song not found!</div>;
  }

  return (
    <div className="song-info">
      <h2>{song.title}</h2>
      <p><strong>Artist:</strong> {song.artist}</p>
      <p><strong>Album:</strong> {song.album}</p>
      <p><strong>Year:</strong> {song.year}</p>
      <p><strong>Rank:</strong> {song.rank}</p>
    </div>
  );
}

export default SongInfo;
