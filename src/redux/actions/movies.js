import axios from 'axios';

export const getAllTopics = () => dispatch => {
  return axios
    .get(`https://fakedata.dev/users/v1/get_random_user`)
    .then(response => {
      return dispatch({
        type: 'GET_ALL_TOPICS',
        payload: response.data,
      });
    })

    .catch(error => {
      console.log(error);
    });
};
