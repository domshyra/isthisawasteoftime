import {applyMiddleware, createStore} from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"
import rootReducer from "./reducers";

export default function configureStore(initialState) {

    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant()))
    );
  }
  