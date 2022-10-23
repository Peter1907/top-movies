import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails, getStoredDetails } from '../../redux/details/details';
import s from './ItemDetails.module.css';

export default function ItemDetails() {
  const star = ('../assets/star.png');
  const saveIcon = ('../assets/add.png');
  const dispatch = useDispatch();
  const { id } = useParams();

  const Data = useSelector((state) => state.details);
  const storedData = localStorage.getItem(`D_${id}`);

  useEffect(() => {
    (storedData ? dispatch(getStoredDetails(id)) : dispatch(getDetails(id)));
    window.scrollTo(0, 0);
  }, [dispatch, id, storedData]);

  return (
    <div className={s.detailsContainer}>
      <div className={s.posterContainer}>
        <img className={s.saveTag} src={saveIcon} alt="#" />
        <img className={s.poster} src={Data.image} alt="poster" />
      </div>
      <div className={s.name}>
        <div className={s.header}>{Data.title}</div>
        {(!Data.tvSeriesInfo) && <div className={s.subHeader}>
          {Data.type} &spades; {Data.year} &spades; {`${Data.contentRating} `}
          &spades; {` ${Data.runtimeStr}`}
        </div>}
        {(Data.tvSeriesInfo) && <div className={s.subHeader}>
          {Data.type} &spades; {Data.year} &spades; {Data.contentRating}
        </div>}
      </div>
      <div className={s.rating}>
        <p className={s.rTitle}>Rating</p>
        <div>
          <img src={star} className={s.star} alt="star shaped icon" />
          <div className={s.rate}>
            <p className={s.score}><strong>{Data.imDbRating}</strong>/10</p><br />
            <p className={s.votes}>({Data.imDbRatingVotes})</p>
          </div>
        </div>
      </div>
      {(Data.genreList)
        && <ul className={s.genres}>
          {Data.genreList.map((genre, id) => (
            <li className={s.genre} key={id}>{genre.value}</li>
          ))}
        </ul>}
      <p className={s.plot}>{Data.plot}</p>
      <hr />
      <div className={s.creators}>
        <h3 className={s.cTitle}>Creators:</h3>
        {(Data.tvSeriesInfo) && <p>{Data.tvSeriesInfo.creators}</p>}
        {(Data.writerList) && <p>{Data.writers}</p>}
      </div>
      <hr />
      <div className={s.stars}>
        <h3 className={s.sTitle}>Stars:</h3>
        <p>{Data.stars}</p>
      </div>
      <hr />
      <div className={s.awards}>
        <h3 className={s.awardsT}>Awards:</h3>
        <p>{(Data.awards === '') ? 'none yet' : Data.awards}</p>
      </div>
      <hr />
      <div className={s.releaseDate}>
        <h3 className={s.releaseDateT}>Release Date:</h3>
        <p>{Data.releaseDate}</p>
      </div>
      <hr />
      <div className={s.companies}>
        <h3 className={s.companiesT}>Companies:</h3>
        <p>{Data.companies}</p>
      </div>
      <hr />
      <div className={s.countries}>
        <h3 className={s.countriesT}>Countries:</h3>
        <p>{Data.countries}</p>
      </div>
      <div className={s.cast}>
        <div className={s.castHead}>
          <h2>Top Cast</h2>
          <p className={s.arrow}></p>
        </div>
        {(Data.actorList) && <div className={s.castList}>
          {Data.actorList.map((actor, id) => (
            <div key={id} className={s.actor}>
              <div className={s.imgContainer} style={{
                backgroundImage: `url(${actor.image})`,
                backgroundSize: 'cover'
              }}>
              </div>
              <div className={s.actorInfo}>
                <h3>{actor.name}</h3>
                <p>{actor.asCharacter}</p>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
}
