import { getFirebase } from '../../../firebase';

export const getAllSeries = () => (dispatch) => {
  return (
    getFirebase()
      .database()
      .ref('/series')
      // .orderByChild('releaseDate')
      .once('value')
      .then((snapshot) => {
        let movies = [];
        const snapshotVal = snapshot.val();
        for (let id in snapshotVal) {
          movies.push(snapshotVal[id]);
        }
        return dispatch({
          type: 'GET_ALL_SERIES',
          payload: movies,
        });
      })

      .catch((error) => {
        console.log(error);
      })
  );
};
