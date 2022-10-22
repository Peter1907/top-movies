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
      <h1 className={s.header}>Top 250 Movies as per Ratings</h1>
      <Filter filter={filterTopMovies} remove={removeTopMoviesFilter} />
      <div className={s.movieList}>
        {Data.map((item, id) => (
          <div key={id} className={s.movie}>
            <div className={s.posterContainer}>
              <img className={s.saveTag} src={saveIcon} alt="#" />
              <img className={s.poster} src={item.image} alt="poster" />
            </div>
            <div className={s.info}>
              <Link to={`/item-details/${item.id}`}>
                <h3 className={s.title}>{id + 1}. {item.title}</h3>
              </Link>
              <div className={s.ratingContainer}>
                <p className={s.rating}>
                  <img src={starIcon} className={s.star} alt="star shaped icon" />
                  {item.imDbRating}
                </p>
              </div>
              <button className={s.btn} type="button">Add to Watchlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
