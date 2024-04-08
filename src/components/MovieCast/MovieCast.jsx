import css from "./MovieCast.module.css";

const MovieCast = ({ cast }) => {
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  return (
    <div>
      <h2 className={css.castTitle}>Cast</h2>
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              className={css.castImg}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              width={150}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
