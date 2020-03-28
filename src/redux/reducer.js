import { combineReducers } from 'redux';
import movies from './reducers/movies';
import series from './reducers/series';

export default combineReducers({
  movies,
  series,
});
