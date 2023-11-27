import "./AnimeEffect.css";

export default function AnimeEffect() {
  return (
    <div>
      <h1>
        <code>/ Hover it /</code>
      </h1>
      <div className="c">
        <div className="i">
          <img
            className="img"
            src="https://i.imgur.com/jLEfHF1.png"
            alt="Anime"
          />
        </div>
        <div className="s1"></div>
        <div className="s2"></div>
        <div className="s3"></div>
      </div>
      <blockquote className="info">
        inspired from anime: <a href="https://kimetsu.com/">Demon Slayer</a>
      </blockquote>
    </div>
  );
}
