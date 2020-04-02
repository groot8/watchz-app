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

export const logNewSeries = (newSeries) => (dispatch) => {
  return getFirebase()
    .database()
    .ref()
    .child(`series/${newSeries.id}`)
    .set(newSeries)
    .then(() => {
      return dispatch({
        type: 'LOG_NEW_SERIES',
        payload: 'a new movie has been added to your diary',
      });
    });
};
