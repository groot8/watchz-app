import { getFirebase } from '../../../firebase';

export const getAllMovies = () => (dispatch) => {
  return getFirebase()
    .database()
    .ref('/movies')
    .orderByChild('date')
    .once('value')
    .then((snapshot) => {
      let movies = [];
      const snapshotVal = snapshot.val();
      for (let id in snapshotVal) {
        movies.push(snapshotVal[id]);
      }
      return dispatch({
        type: 'GET_ALL_MOVIES',
        payload: movies,
      });
    })

    .catch((error) => {
      console.log(error);
    });
};

export const logNewMovie = (newMovie) => (dispatch) => {
  return getFirebase()
    .database()
    .ref()
    .child(`movies/${newMovie.id}`)
    .set(newMovie)
    .then(() => {
      return dispatch({
        type: 'LOG_NEW_MOVIE',
        payload: 'a new movie has been added to your diary',
      });
    });
};
