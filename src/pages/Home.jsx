import { Link } from "react-router-dom";
import songsData from "../data/songs.json";

function Home() {
  return (
    <div>
      <h1 className="heading">Rolling Stones 500 Greatest Songs of All Time</h1>
      <ul>
        {songsData.songs.map((song) => (
          <li key={song.rank}>
            <Link to={`/song/${song.rank}`}>
              <span className="song-title">{song.title}</span>
              <span className="artist-name">{song.artist}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
