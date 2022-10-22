import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter/Filter';
import {
  filterTopMovies,
  getStoredTopMovies,
  getTopMovies,
  removeTopMoviesFilter
} from '../redux/top-movies/top-movies';
import s from './TopMovies.module.css';

export default function TopMovies() {
  const saveIcon = ('./assets/add.png');
  const starIcon = ('./assets/star.png');
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.topMovies);
  const storedData = localStorage.getItem('TOP_MOVIES');

  useEffect(() => {
    (storedData ? dispatch(getStoredTopMovies()) : dispatch(getTopMovies()));
    window.scrollTo(0, 0);
  }, [dispatch, storedData]);

  return (
    <div className={s.topMovies}>
      <div className={s.headers}>
        <h1 className={s.header}>Top Movies</h1>
        <h3 className={s.subHeader}>PMDB&apos;s Top 250 Movies as per Ratings</h3>
      </div>
      <Filter filter={filterTopMovies} remove={removeTopMoviesFilter} />
      <div className={s.movieList}>
        {Data.map((item, index) => (
          <div key={index} className={s.movie}>
            <img className={s.poster} src={item.image} alt="movie poster" />
            <p className={s.index}>{`${index + 1} . `}</p>
            <Link className={s.title} to={`/item-details/${item.id}`}>
              <p>{item.fullTitle}</p>
            </Link>
            <div className={s.ratingContainer}>
              <p className={s.rating}>
                <img src={starIcon} className={s.playButton} alt="star shaped icon" />
                {item.imDbRating} ({item.imDbRatingCount})
              </p>
            </div>
            <img className={s.saveTag} src={saveIcon} alt="#" />
          </div>
        ))}
      </div>
    </div>
  );
}
