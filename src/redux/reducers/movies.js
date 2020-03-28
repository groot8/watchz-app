const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
