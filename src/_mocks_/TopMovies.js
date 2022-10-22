/* eslint-disable*/
import { BrowserRouter, Link } from 'react-router-dom';
import store from './store';
import s from './TopMovies.module.css';

export default function TopMovies() {
  const saveIcon = ('./assets/add.png');
  const starIcon = ('./assets/star.png');
  const Data = store.topMovies;

  return (
    <BrowserRouter>
      <div className={s.topMovies}>
        <h1 className={s.header}>Top 250 Movies of All Times</h1>
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
    </BrowserRouter>
  );
}
