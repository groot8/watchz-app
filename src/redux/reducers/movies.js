const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'LOG_NEW_MOVIE':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
