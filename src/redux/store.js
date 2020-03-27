import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getfirebase } from '../../firebase';

const initialState = {};
// const middleware = [thunk.withExtraArgument()];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    // .withExtraArgument({ getFirebase, getFirestore })
    // reactReduxFirebase(firebaseRef),
    // reduxFirestore(firebaseRef),
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
