import { combineReducers, configureStore } from '@reduxjs/toolkit';
import detailsReducer from './details/details';
import topMoviesReducer from './top-movies/top-movies';

const peterReducer = combineReducers({
  topMovies: topMoviesReducer,
  details: detailsReducer,
});

const store = configureStore({
  reducer: peterReducer,
});

export default store;
