const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_SERIES':
      return {
        ...state,
        series: action.payload,
      };
    case 'LOG_NEW_SERIES':
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
