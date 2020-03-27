import axios from 'axios';
import { getFirebase } from '../../../firebase';

export const getAllTopics = () => dispatch => {
  return getFirebase()
    .database()
    .ref('/movies')
    .orderByChild('releaseDate')
    .once('value')
    .then(snapshot => {
      let movies = [];
      const snapshotVal = snapshot.val();
      for (let slug in snapshotVal) {
        movies.push(snapshotVal[slug]);
      }
      return dispatch({
        type: 'GET_ALL_TOPICS',
        payload: movies,
      });
    })

    .catch(error => {
      console.log(error);
    });
};
// axios;
// .get(`https://fakedata.dev/users/v1/get_random_user`)
