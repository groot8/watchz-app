import { getFirebase } from '../../../firebase';

export const getAllMovies = () => (dispatch) => {
  return (
    getFirebase()
      .database()
      .ref('/movies')
      // .orderByChild('releaseDate')
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
      })
  );
};
