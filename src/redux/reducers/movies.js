const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_TOPICS':
      return {
        ...state,
        topics: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
